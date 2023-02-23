let map = L.map('map').setView([19.692495116736104, -98.84353568858695],16)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change',function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,13);
  })

  //Adding a popup instead of an alert:

  var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(`Estas son las coordenadas elegidas: ${e.latlng.toString()}`)
        .openOn(map);
}

map.on('click', onMapClick);

  //Aadding a marker
  var marker = L.marker([19.692393542736422,-98.84351480601472]).addTo(map);
  marker.bindPopup("<b>¡Hola!</b><br>Soy la Pirámide del Sol");

  //Adding a circle
  var circle = L.circle([19.695727472390544, -98.8449347369769], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 250
}).addTo(map);

circle.bindPopup("El Camino de los Muertos conecta las piramides de la Luna y del Sol");

  //Adding a polygon
  var polygon = L.polygon([
    [19.69023474538704, -98.84292767399558],
    [19.689058398669143, -98.84314631849442],
    [19.68869814075811, -98.84275588188936],
    [19.689043694280485, -98.8422561230349],
    [19.689499529701166, -98.84199453050952],
    [19.690300914633177, -98.8420843309287]
]).addTo(map);

polygon.bindPopup("¡Hey, tienes que darte una vuelta por aquí!");

