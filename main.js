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
  view: new View({
    center: fromLonLat([-35.198429, -5.836685]),
    zoom: 4.5
  })
});

map.on("click", (e) => {
  const layer = new Feature({
    geometry: new Point(fromLonLat(transform(e.coordinate, 'EPSG:3857', 'EPSG:4326'))),
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

  map.addLayer(vectorLayer);
})

