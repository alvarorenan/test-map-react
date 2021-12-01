import './style.css';
import './node_modules/leaflet/dist/leaflet.css'; 
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
var map = L.map('map').setView([-5.836685 ,-35.198429], 4.5);

var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(map);

var mapModal = L.map('mapModal').setView([-5.756361457178641 , -35.19503503036023], 15);

var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(mapModal);

let btnAdicionar = document.getElementById("btnAdicionar");

btnAdicionar.addEventListener("click", () => {
  let container = document.getElementById("container");
  container.style = "  visibility: visible;"
});

var marker = L.marker([0,0]);
var aux;

let btnClose = document.getElementById("btnClose");

btnClose.addEventListener("click", () => {
  let container = document.getElementById("container");
  container.style = "  visibility: hidden;"
  mapModal.removeLayer(marker);
});

let btnSalvar = document.getElementById("btnSalvar");

btnSalvar.addEventListener("click", () => {
  marker = L.marker(aux).addTo(map); 
});

mapModal.on('click', (e) => {
  mapModal.removeLayer(marker);
  let nome = document.getElementById("nomeInput").value;
  let descricao = document.getElementById("descricaoInput").value;
  marker = L.marker(e.latlng).addTo(mapModal)
  .bindPopup('<b>'+nome+'</b><br>'+ descricao+'</br>').openPopup();
  aux = e.latlng;
  console.log(e.latlng);
});