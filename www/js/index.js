var Latitude = undefined;
var Longitude = undefined;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    console.log ('Device is Ready');
    getMapLocation();
}

function getMapLocation(){
    navigator.geolocation.getCurrentPosition(onMapSuccess, onMapError, {enableHighAccuracy: true});
}

var onMapSuccess = function (position) {
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    console.log ("Lat:"+Latitude+"  Long:"+Longitude);
    getMap(Latitude, Longitude);
}

function onMapError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}

function getMap(latitude, longitude) {

    var mapOptions = {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8 
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);


    var latLong = new google.maps.LatLng(latitude, longitude);

    var marker = new google.maps.Marker({
        position: latLong
    });

    marker.setMap(map);
    map.setZoom(15);
    map.setCenter(marker.getPosition());
}