
// NAVIGATION TABS
$('.nav-tabs a[href="#1"]').click(function(){
  document.getElementById('map_container_city').style.visibility = 'visible';
  document.getElementById('map_container_county').style.visibility = 'hidden';
  document.getElementById('map_container_compare_a').style.visibility = 'hidden';
  document.getElementById('map_container_compare_b').style.visibility = 'hidden';
  document.getElementById('map_container_nyc3d').style.visibility = 'hidden';
});

$('.nav-tabs a[href="#2"]').click(function(){
  document.getElementById('map_container_city').style.visibility = 'hidden';
  document.getElementById('map_container_county').style.visibility = 'visible';
  document.getElementById('map_container_compare_a').style.visibility = 'hidden';
  document.getElementById('map_container_compare_b').style.visibility = 'hidden';
  document.getElementById('map_container_nyc3d').style.visibility = 'hidden';
});

$('.nav-tabs a[href="#3"]').click(function(){
  document.getElementById('map_container_city').style.visibility = 'hidden';
  document.getElementById('map_container_county').style.visibility = 'hidden';
  document.getElementById('map_container_compare_a').style.visibility = 'visible';
  document.getElementById('map_container_compare_b').style.visibility = 'visible';
  document.getElementById('map_container_nyc3d').style.visibility = 'hidden';
});

$('.nav-tabs a[href="#4"]').click(function(){
  document.getElementById('map_container_city').style.visibility = 'hidden';
  document.getElementById('map_container_county').style.visibility = 'hidden';
  document.getElementById('map_container_compare_a').style.visibility = 'hidden';
  document.getElementById('map_container_compare_b').style.visibility = 'hidden';
  document.getElementById('map_container_nyc3d').style.visibility = 'visible';
});

// CITY DATA POINTS ADD TO MAP

map_city.on('style.load', function() { //style load - retain nfip layer with style change
  map_city.addSource('city_points', {
          type: 'geojson',
          data: 'https://raw.githubusercontent.com/rossbernet/penn_final/master/us_cities_1_copy_1.geojson'
  });
      map_city.addLayer({
          'id': 'points',
          'type': 'circle',
          'source': 'city_points',
          'layout': {
              'visibility': 'visible',
          },
          'paint': {
        'circle-radius':1.5,
        'circle-color': {
          stops: [
            [0, '#2DC4B2']
          ]
        },
        'circle-opacity': 0.9
      }
    });
});


// TAB 2: COUNTIES
map_county.on('style.load', function() { //style load - retain nfip layer with style change
  map_county.addSource('population', {
          'type': 'vector',
          'url': 'mapbox://mapbox.660ui7x6'
      });
      var zoomThreshold = 4;
      map_county.addLayer({
          'id': 'state-population',
          'source': 'population',
          'source-layer': 'state_county_population_2014_cen',
          'maxzoom': zoomThreshold,
          'type': 'fill',
          'filter': ['==', 'isState', true],
          'paint': {
              'fill-color': {
                  property: 'population',
                  stops: [
                      [0, '#F2F12D'],
                      [500000, '#EED322'],
                      [750000, '#E6B71E'],
                      [1000000, '#DA9C20'],
                      [2500000, '#CA8323'],
                      [5000000, '#B86B25'],
                      [7500000, '#A25626'],
                      [10000000, '#8B4225'],
                      [25000000, '#723122']
                  ]
              },
              'fill-opacity': 0.75
          }
      }, 'waterway-label');


      map_county.addLayer({
        'id': 'county-population',
        'source': 'population',
        'source-layer': 'state_county_population_2014_cen',
        'minzoom': zoomThreshold,
        'type': 'fill',
        'filter': ['==', 'isCounty', true],
        'paint': {
            'fill-color': {
                property: 'population',
                stops: [
                    [0, '#F2F12D'],
                    [100, '#EED322'],
                    [1000, '#E6B71E'],
                    [5000, '#DA9C20'],
                    [10000, '#CA8323'],
                    [50000, '#B86B25'],
                    [100000, '#A25626'],
                    [500000, '#8B4225'],
                    [1000000, '#723122']
                ]
            },
            'fill-opacity': 0.75
        }
    }, 'waterway-label');


});


var stateLegendEl = document.getElementById('state-legend');
var countyLegendEl = document.getElementById('county-legend');
map_county.on('zoom', function() {
  var zoomThreshold = 4;
    if (map_county.getZoom() > zoomThreshold) {
        stateLegendEl.style.display = 'none';
        countyLegendEl.style.display = 'block';
    } else {
        stateLegendEl.style.display = 'block';
        countyLegendEl.style.display = 'none';
    }
});











//
// map_container_city.on('style.load', function() { //style load - retain nfip layer with style change
//   // map4.addSource("nfipDat", {
//   //      "type": "geojson",
//   //      "data": "https://raw.githubusercontent.com/rossbernet/penn_final/master/us_city_names_copy.geojson"
//   //  });
//
//   map_container_city.addSource('city_points', {
//            type: 'geojson',
//            data: 'https://raw.githubusercontent.com/rossbernet/penn_final/master/us_cities_1_copy_1.geojson'
//   });
//   map_container_city.addLayer({
//          'id': 'points',
//          'type': 'circle',
//          'source': 'city_points',
//          'layout': {
//              'visibility': 'visible',
//          },
//          'paint': {
//        'circle-radius':3,
//        'circle-color': {
//          property: 'pop2000',
//          stops: [
//            [0, '#FFFF00']
//          ]
//        },
//        'circle-opacity': 0.9
//      }
//    }, 'admin-2-boundaries-dispute');
//
//    // Create a popup, but don't add it to the map yet.
//    var popup = new mapboxgl.Popup({
//         closeButton: false,
//         closeOnClick: false
//       });
//
//   map_container_city.on('mouseenter', 'points', function(e) {
//     // Change the cursor style as a UI indicator.
//     map_container_city.getCanvas().style.cursor = 'pointer';
//
//     // Populate the popup and set its coordinates
//     // based on the feature found.
//     popup.setLngLat(e.features[0].geometry.coordinates)
//         .setHTML('<strong>City: </strong> ' + e.features[0].properties.areaname +
//                  '<br><strong>Population:</strong> ' + e.features[0].properties.pop2000)
//         .addTo(map4);
//   });
//
//   map_container_city.on('mouseleave', 'points', function() {
//       map_container_city.getCanvas().style.cursor = '';
//       popup.remove();
//   });
// });
//
//






// City Map - Data
//
// map_city.on('style.load', function() { //style load - retain nfip layer with style change
//   map_city.addSource('city_points', {
//            type: 'geojson',
//            data: 'https://raw.githubusercontent.com/rossbernet/penn_final/master/us_city_names_copy.geojson'
//   });
//   map_city.addLayer({
//          'id': 'points',
//          'type': 'circle',
//          'source': 'city_points',
//          'layout': {
//              'visibility': 'visible',
//          },
//          'paint': {
//        'circle-radius':3,
//        'circle-color': {
//          property: 'pop2000',
//          stops: [
//            [0, '#FFFF00']
//          ]
//        },
//        'circle-opacity': 0.9
//      }
//    }, 'admin-2-boundaries-dispute');
//
//    // Create a popup, but don't add it to the map yet.
//    var popup = new mapboxgl.Popup({
//         closeButton: false,
//         closeOnClick: false
//       });
//
//
//       map_city.on('mouseenter', 'points', function(e) {
//       // Change the cursor style as a UI indicator.
//       map_city.getCanvas().style.cursor = 'pointer';
//
//       // Populate the popup and set its coordinates
//       // based on the feature found.
//       popup.setLngLat(e.features[0].geometry.coordinates)
//           .setHTML('<strong>City: </strong> ' + e.features[0].properties.areaname +
//                    '<br><strong>Population:</strong> ' + e.features[0].properties.pop2000)
//           .addTo(map4);
//     });
//
//     map_city.on('mouseleave', 'points', function() {
//         map_city.getCanvas().style.cursor = '';
//         popup.remove();
//     });
//     });
