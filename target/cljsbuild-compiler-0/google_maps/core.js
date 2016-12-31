// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('google_maps.core');
goog.require('cljs.core');
goog.require('reagent.core');
google_maps.core.home_render = (function google_maps$core$home_render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"500px",cljs.core.cst$kw$width,"500px"], null)], null)], null);
});
google_maps.core.home_did_mount = (function google_maps$core$home_did_mount(this$){
var map_canvas = reagent.core.dom_node(this$);
var map_coordinates = (new google.maps.LatLng(25.033,121.565));
var map_options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$center,map_coordinates,cljs.core.cst$kw$zoom,(18)], null));
var map = (new google.maps.Map(map_canvas,map_options));
var map_marker_options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,map_coordinates,cljs.core.cst$kw$map,map,cljs.core.cst$kw$title,"Host location"], null));
var map_marker = (new google.maps.Marker(map_marker_options));
return map;
});
google_maps.core.home = (function google_maps$core$home(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,google_maps.core.home_render,cljs.core.cst$kw$component_DASH_did_DASH_mount,google_maps.core.home_did_mount], null));
});
google_maps.core.geolocate_resolver = (function google_maps$core$geolocate_resolver(results,status){
var lat_11190 = ((((results[(0)])["geometry"])["location"])["lat"]).call(null);
var lng_11191 = ((((results[(0)])["geometry"])["location"])["lng"]).call(null);
var address_coord_11192 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$lat,cljs.core.cst$kw$lng],[lat_11190,lng_11191]);
alert(lat_11190);

alert(lng_11191);

return alert("No results found!");
});
goog.exportSymbol('google_maps.core.geolocate_resolver', google_maps.core.geolocate_resolver);
google_maps.core.geolocate = (function google_maps$core$geolocate(){
var geocoder = (new google.maps.Geocoder());
var address = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$address,document.getElementById("addressac").value], null));
return geocoder.geocode(address,google_maps.core.geolocate_resolver);
});
google_maps.core.street_to_geo = (function google_maps$core$street_to_geo(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Street address to geolocation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"addressac",cljs.core.cst$kw$placeholder,"Enter your address",cljs.core.cst$kw$type,"text"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"addressbutton",cljs.core.cst$kw$onClick,google_maps.core.geolocate], null),"Check your addresse's coordinates!"], null)], null);
});
google_maps.core.street_address_resolver = (function google_maps$core$street_address_resolver(results,status){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("OK",status)){
var formatted_address = ((results[(0)])["formatted_address"]);
return alert(formatted_address);
} else {
return alert("No results found!");
}
});
goog.exportSymbol('google_maps.core.street_address_resolver', google_maps.core.street_address_resolver);
google_maps.core.streetlocate = (function google_maps$core$streetlocate(){
var geocoder = (new google.maps.Geocoder());
var latlng_google = (new google.maps.LatLng(document.getElementById("geolat").value,document.getElementById("geoln").value));
var latlng = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$latLng,latlng_google], null));
console.log(latlng);

return geocoder.geocode(latlng,google_maps.core.street_address_resolver);
});
google_maps.core.geo_to_street = (function google_maps$core$geo_to_street(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Geolocation to street address"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"geolat",cljs.core.cst$kw$placeholder,"Enter the latitude of the coordinates",cljs.core.cst$kw$type,"number"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"geoln",cljs.core.cst$kw$placeholder,"Enter the longitude of the coordinates",cljs.core.cst$kw$type,"number"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"geobutton",cljs.core.cst$kw$onClick,google_maps.core.streetlocate], null),"Check your coordinates' address!"], null)], null);
});
google_maps.core.homepage = (function google_maps$core$homepage(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Welcome to the Google Maps API homepage!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [google_maps.core.home], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [google_maps.core.street_to_geo], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [google_maps.core.geo_to_street], null)], null);
});
google_maps.core.main = (function google_maps$core$main(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [google_maps.core.homepage], null),document.getElementById("app"));
});
goog.exportSymbol('google_maps.core.main', google_maps.core.main);
