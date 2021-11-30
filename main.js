import './style.css';
import { Map, View, Feature} from 'ol';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';
import Point from 'ol/geom/Point';
import { fromLonLat, transform } from 'ol/proj';
import {Icon, Style} from 'ol/style';


const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  // Latitude: -15.7801, Longitude: -47.9292
  view: new View({
    center: fromLonLat([-47.9292, -13.7801]),
    zoom: 4.5
  })
});

const mapModal = new Map({
  target: 'mapModal',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: fromLonLat([-35.198429, -5.836685]),
    zoom: 4.5
  })
});

let btnAdicionar = document.getElementById("btnAdicionar");

btnAdicionar.addEventListener("click", () => {
  let container = document.getElementById("container");
  container.style = "  visibility: visible;"
});

mapModal.on("click", (e) => {
  let point =  new Point(fromLonLat(transform(e.coordinate, 'EPSG:3857', 'EPSG:4326')));
  console.log(point.getRevision());
  point.changed()
  // if(point.getRevision() == 0){
    const layer = new Feature({
      geometry: point
    });
  
    layer.setStyle( new Style({
      image: new Icon({
        color: 'rgba(255, 255, 255, )',
        crossOrigin: 'anonymous',
        src: './assets/icon.png',
        scale: 0.01,
      }),
    }));
  
    const vectorSource = new VectorSource({
      features: [layer],
    });
  
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    mapModal.set(vectorLayer);  
  // }
  
})

