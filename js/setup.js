mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zc2Jlcm5ldCIsImEiOiJRLTh3WEVNIn0.7S-AEC6jsZUhih6bsJ39nA';

var map_city = new mapboxgl.Map({
  container: 'map_container_city', // container element id
  style: 'mapbox://styles/mapbox/dark-v9',
  center: [-95.7129, 37.0902], // initial map center in [lon, lat]
  zoom: 3
});


var map_county = new mapboxgl.Map({
  container: 'map_container_county', // container element id
  style: 'mapbox://styles/mapbox/dark-v9',
  center: [-95.7129, 37.0902], // initial map center in [lon, lat]
  zoom: 4
});


var map_nyc3d = new mapboxgl.Map({
  container: 'map_container_nyc3d', // container element id
  style: 'mapbox://styles/mapbox/dark-v9',
  center: [-95.7129, 37.0902], // initial map center in [lon, lat]
  zoom: 6
});


// COMPARE MAPS
var map_compare_a = new mapboxgl.Map({
    container: 'map_container_compare_a',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [0, 0],
    zoom: 0
});

var map_compare_b = new mapboxgl.Map({
    container: 'map_container_compare_b',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [0, 0],
    zoom: 0
});

var map = new mapboxgl.Compare(map_compare_a, map_compare_b, {
    // Set this to enable comparing two maps by mouse movement:
    // mousemove: true
});
