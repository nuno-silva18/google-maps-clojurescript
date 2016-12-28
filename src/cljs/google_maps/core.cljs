(ns google-maps.core
    (:require [reagent.core :as reagent]))

(defn home-render []
  [:div {:style {:height "500px"
                 :width "500px"}
  }])

(defn home-did-mount [this]
  (let [map-canvas (reagent/dom-node this)
        map-coordinates (google.maps.LatLng. 25.033, 121.565)
        map-options (clj->js {"center" map-coordinates
                              "zoom" 18})
        map (js/google.maps.Map. map-canvas map-options)
        map-marker-options (clj->js {"position" map-coordinates
                                     "map" map
                                     "title" "Host location"})
        map-marker (js/google.maps.Marker. map-marker-options)]
        map))

(defn home []
  (reagent/create-class {:reagent-render home-render
                         :component-did-mount home-did-mount}))

(defn ^:export main []
  (reagent/render [home]
                  (.getElementById js/document "app")))