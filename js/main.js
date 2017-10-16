
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




map_city.on('style.load', function() { //style load - retain nfip layer with style change

map_city.addSource('nfipPoints', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/estheroids/mappluto/master/nfip_pts.geojson'
    });
    map_city.addLayer({
        'id': 'points',
        'type': 'circle',
        'source': 'nfipPoints',
        'layout': {
            'visibility': 'visible',
        },
        'paint': {
      'circle-radius':3,
      'circle-color': {
        property: 'CNTYSUM',
        stops: [
          [0, '#2DC4B2'],
          [6, '#3BB3C3'],
          [12, '#669EC4'],
          [18, '#8B88B6'],
          [24, '#A2719B'],
          [30, '#AA5E79']
        ]
      },
      'circle-opacity': 0.9
    }
  }, 'admin-2-boundaries-dispute');
    });
