(ns google-maps.core
  (:require [reagent.core :as reagent]))

; Google Maps API component, composed by home-render and home-did-mount

(defn home-render []
  [:div {:style {:height "500px"
                 :width "500px"}}])

(defn home-did-mount [this]
  (let [map-canvas (reagent/dom-node this)
        map-coordinates (google.maps.LatLng. 25.033, 121.565)
        map-options (clj->js {:center map-coordinates
                              :zoom 15})
        map (js/google.maps.Map. map-canvas map-options)
        map-marker-options (clj->js {:position map-coordinates
                                     :map map
                                     :title "Host location"})
        map-marker (js/google.maps.Marker. map-marker-options)
        map-circle-options (clj->js {:map map
                                     :radius 500
                                     :fillColor "#89CFF0"
                                     :fillOpacity 0.35
                                     :strokeColor "#89CFF0"
                                     :strokeOpacity 0.8
                                     :strokeWeight 2})
        map-circle (js/google.maps.Circle. map-circle-options)]
    (.bindTo map-circle "center" map-marker "position")
    map))

(defn home []
  (reagent/create-class {:reagent-render home-render
                         :component-did-mount home-did-mount}))

; Geolocation conversion to a street address component

(defn ^:export geolocate-resolver [results status]
    (if (= "OK" status)
      (let [lat ((aget (aget (aget (aget results 0) "geometry") "location") "lat"))
            lng ((aget (aget (aget (aget results 0) "geometry") "location") "lng"))
            address-coord (hash-map :lat lat, :lng lng)] ; In case an object is needed
        (js/alert lat)
        (js/alert lng))
        (js/alert "No results found!")))


(defn geolocate []
  (let [geocoder (google.maps.Geocoder.)
        address (clj->js {:address (.-value (.getElementById js/document "addressac"))})]
      (.geocode geocoder address geolocate-resolver)))



(defn street-to-geo []
  [:div
   [:h3 "Street address to geolocation"]
   [:input {:id "addressac"
            :placeholder "Enter your address"
            :type "text"}]
   [:button {:id "addressbutton"
             :onClick geolocate}
    "Check your address's coordinates!"]])

; Street address conversion to a geolocation component

(defn ^:export street-address-resolver [results status]
  (if (= "OK" status)
    (let [formatted-address (aget (aget results 0) "formatted_address")]
      (js/alert formatted-address))
    (js/alert "No results found!")))


(defn streetlocate []
  (let [geocoder (js/google.maps.Geocoder.)
        latlng-google (js/google.maps.LatLng. (.-value (.getElementById js/document "geolat")),
                                              (.-value (.getElementById js/document "geoln")))
        latlng (clj->js {:latLng latlng-google})]
    (js/console.log latlng)
    (.geocode geocoder latlng street-address-resolver)))


(defn geo-to-street []
  [:div
   [:h3 "Geolocation to street address"]
   [:input {:id "geolat"
            :placeholder "Enter the latitude of the coordinates"
            :type "number"}]
   [:input {:id "geoln"
            :placeholder "Enter the longitude of the coordinates"
            :type "number"}]
   [:button {:id "geobutton"
             :onClick streetlocate}
    "Check your coordinates' address!"]])

;; Auto-complete the address using Google Map's API AutoComplete object

(defn autocomplete-field-render []
  [:div
   [:h3 "Auto-complete to street address"]
   [:input {:id "autocompletefield"
            :placeholder "Enter your address! I won't steal it, promise."
            :type "text"}]])

(defn ^:export initialize []
  (let [address (.getElementById js/document "autocompletefield")
        autocomplete (js/google.maps.places.Autocomplete. address)]))


(defn autocomplete-field-did-mount []
    (js/google.maps.event.addDomListener. js/window "load" initialize))


(defn autocomplete-field []
  (reagent/create-class {:reagent-render autocomplete-field-render
                         :component-did-mount autocomplete-field-did-mount}))

; Homepage

(defn homepage []
  [:div
   [:h1 "Welcome to the Google Maps API homepage!"]
   [home]
   [street-to-geo]
   [geo-to-street]
   [autocomplete-field]])

(defn ^:export main []
  (reagent/render [homepage]
                  (.getElementById js/document "app")))