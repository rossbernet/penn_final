mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zc2Jlcm5ldCIsImEiOiJRLTh3WEVNIn0.7S-AEC6jsZUhih6bsJ39nA';

var map_city = new mapboxgl.Map({
  container: 'map_container_city', // container element id
  style: 'mapbox://styles/mapbox/dark-v9',
  center: [-95, 37], // initial map center in [lon, lat]
  zoom: 3
});

map_city.addControl(new mapboxgl.NavigationControl());

var map_county = new mapboxgl.Map({
  container: 'map_container_county', // container element id
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-95, 37], // initial map center in [lon, lat]
  zoom: 3
});


// COMPARE MAPS
var map_compare_a = new mapboxgl.Map({
    container: 'map_container_compare_a',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [-95, 37], // initial map center in [lon, lat]
    zoom: 3
});

var map_compare_b = new mapboxgl.Map({
    container: 'map_container_compare_b',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-95, 37], // initial map center in [lon, lat]
    zoom: 3
});

var map = new mapboxgl.Compare(map_compare_a, map_compare_b, {
    // Set this to enable comparing two maps by mouse movement:
    // mousemove: true
});


// Map in 3d


var map_3d = new mapboxgl.Map({
  // container: 'map_container_nyc3d', // container element id
  // style: 'mapbox://styles/mapbox/dark-v9',
  // center: [-75.16, 34.95],
  // zoom: 13,
  // pitch: 45,
  // bearing: -17.6,
  // hash: true
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [-75.167, 39.9524],
    zoom: 15,
    pitch: 136,
    bearing: 60,
    hash: true,
    container: 'map_container_3d'
});

map_3d.addControl(new mapboxgl.NavigationControl());
