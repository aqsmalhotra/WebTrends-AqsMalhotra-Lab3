let map: any;

interface LatLng {
  lat: number,
  lng: number
}

let Toronto: LatLng = {lat: 43, lng: -79.38 };

function initMap() {
  // The location of Toronto
  // The map, centered at Toronto
  map = new google.maps.Map(
      document.getElementById('map'),
      {zoom: 8, center: Toronto});
  // add marker to toronto position
  var marker = new google.maps.Marker({position: Toronto, map: map});
}
