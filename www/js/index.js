var Latitude = undefined;
var Longitude = undefined;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    console.log ('Device is Ready');
    $("#btn-getloc").click(function(){
        getMapLocation();
    });
    $("#btn-showmap").click(function(){
        if ($("#lat").val()) {Latitude = $("#lat").val();}
        if ($("#long").val()) {Longitude = $("#long").val();}
        showMap();
    });
}

function showMap(){
    //$( ":mobile-pagecontainer" ).pagecontainer( "change", "mappage.html");
    getMap(Latitude, Longitude);
}

function getMapLocation(){
    navigator.geolocation.getCurrentPosition(onMapSuccess, onMapError, {enableHighAccuracy: true, timeout: 10000});
}

var onMapSuccess = function (position) {
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    console.log ("Lat:"+Latitude+"  Long:"+Longitude);
    $("#lat").val(Latitude);
    $("#long").val(Longitude);
    alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    //getMap(Latitude, Longitude);
}

function onMapError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}

function getMap(latitude, longitude) {
    console.log("Mostrando o mapa para Lat/long"+Latitude+" "+Longitude);
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