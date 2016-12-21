// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('google_maps.core');
goog.require('cljs.core');
goog.require('reagent.core');
google_maps.core.home_render = (function google_maps$core$home_render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"300px",cljs.core.cst$kw$width,"300px"], null)], null)], null);
});
google_maps.core.home_did_mount = (function google_maps$core$home_did_mount(this$){
var map_canvas = reagent.core.dom_node(this$);
var map_options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["center",(new google.maps.LatLng(41.158,-8.629)),"zoom",(8)], null));
return (new google.maps.Map(map_canvas,map_options));
});
google_maps.core.home = (function google_maps$core$home(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,google_maps.core.home_render,cljs.core.cst$kw$component_DASH_did_DASH_mount,google_maps.core.home_did_mount], null));
});
google_maps.core.main = (function google_maps$core$main(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [google_maps.core.home], null),document.getElementById("app"));
});
goog.exportSymbol('google_maps.core.main', google_maps.core.main);
