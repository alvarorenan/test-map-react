import './style.css';
import './node_modules/leaflet/dist/leaflet.css'; 
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import 'leaflet.sync';
import { listen } from 'ol/events';

var map = L.map('map').setView([-15.77972, -48.92972], 4.2);

var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  minZoom: 2,
  zoom: 5,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(map);

var mapModal = L.map('mapModal').setView([-5.756361457178641 , -35.19503503036023], 6);
map.sync(mapModal);
map.setMaxBounds([[-90, -180], [90, 180]]); 
mapModal.setMaxBounds([[-90, -180], [90, 180]]); 
var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  minZoom: 2,
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
var icon = L.icon({
  iconUrl: './assets/icon.png',

  iconSize:     [24, 32], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [13, 30], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [7.4, -40] // point from which the popup should open relative to the iconAnchor

});

var marker = L.marker([0,0]);
var aux;
var titulo,desc;

let btnClose = document.getElementById("btnClose");

btnClose.addEventListener("click", () => {
  let container = document.getElementById("container");
  let nomeInput = document.getElementById("nomeInput");
  let descricaoInput = document.getElementById("descricaoInput");
  nomeInput.value = "";
  descricaoInput.value = "";
  container.style = "  visibility: hidden;"

  mapModal.removeLayer(marker);
});

var markerID = 0;
const OutrosLayerGroup = L.layerGroup().addTo(map);
const santoriniLayerGroup = L.layerGroup().addTo(map);
const acampamentoLayerGroup = L.layerGroup().addTo(map);

let btnSalvar = document.getElementById("btnSalvar");

btnSalvar.addEventListener("click", () => {
  marker = L.marker(aux, {icon}).on('mouseover', function() {
    this.bindPopup('<b>'+titulo+'</b><br>'+ desc+'</br>').openPopup()});
  switch(markerID){
    case 0: OutrosLayerGroup.addLayer(marker);
            break;
    case 1: santoriniLayerGroup.addLayer(marker);
            break;
    case 2: acampamentoLayerGroup.addLayer(marker);
            break;
  }
  let nomeInput = document.getElementById("nomeInput");
  let descricaoInput = document.getElementById("descricaoInput");
  nomeInput.value = "";
  descricaoInput.value = "";
  container.style = "  visibility: hidden;"
});


let btnAll = document.getElementById("btnAll");
let btnAcampamento = document.getElementById("btnAcampamento");
let btnSantorini = document.getElementById("btnSantorini")

btnAll.addEventListener("click", ()=>{
  map.addLayer(OutrosLayerGroup);
  map.addLayer(santoriniLayerGroup);
  map.addLayer(acampamentoLayerGroup);
});

btnSantorini.addEventListener("click", ()=>{
  map.removeLayer(OutrosLayerGroup);
  map.addLayer(santoriniLayerGroup);
  map.removeLayer(acampamentoLayerGroup);
});

btnAcampamento.addEventListener("click", ()=>{
  map.removeLayer(OutrosLayerGroup);
  map.removeLayer(santoriniLayerGroup);
  map.addLayer(acampamentoLayerGroup);
});

let iconeSantorini = document.getElementById("iconeSantorini");
let iconeAcampamento = document.getElementById("iconeAcampamento");
let iconeNormal = document.getElementById("iconeNormal");

iconeSantorini.addEventListener("click", ()=>{
  markerID = 1;
  icon = L.icon({
    iconUrl: './assets/santorini.png',
  
    iconSize:     [32, 32], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [3, 30], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
  });
})


iconeAcampamento.addEventListener("click", ()=>{
  markerID = 2;
  icon = L.icon({
    iconUrl: './assets/acampamentoIcon.png',
  
    iconSize:     [32, 32], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [3, 30], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
  });
})
    
iconeNormal.addEventListener("click", ()=>{
  markerID = 2;
  icon = L.icon({
    iconUrl: './assets/icon.png',
  
    iconSize:     [24, 32], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [13, 30], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [7.4, -40] // point from which the popup should open relative to the iconAnchor
  });
})

mapModal.on('click', (e) => {
  mapModal.removeLayer(marker);
  let nome = document.getElementById("nomeInput").value;
  let descricao = document.getElementById("descricaoInput").value;
  titulo = nome;
  desc = descricao;
  marker = L.marker(e.latlng, {icon}).addTo(mapModal);
  aux = e.latlng;
  console.log(e.latlng);
})
