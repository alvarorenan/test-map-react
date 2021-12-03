import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, LayerGroup, LayersControl } from 'react-leaflet';

function Main() {
    
    return (
        <main >
            <MapContainer 
                    center={[-15.77972, -48.92972]}
                    zoom={4.5}
                    maxZoom={18}
                    minZoom={5}   
                    style={{width: '100%',
                        height: '100vh',
                        position: 'absolute',
                        top: '0',
                        bottom: '0',
                        zIndex: '1'}}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    <LayersControl position="topright">
                        <LayersControl.Overlay checked name="Turismo de base comunitária">
                            <LayerGroup>  
                                <Marker position={[-15.77972, -48.92972]}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </LayerGroup>
                        </LayersControl.Overlay>
                        <LayersControl.Overlay checked name="Segurança turística">
                            <LayerGroup>  
                                <Marker position={[-15.77972, -45.92972]}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </LayerGroup>
                        </LayersControl.Overlay>
                        <LayersControl.Overlay checked name="outro tipo de turismo">
                            <LayerGroup>  
                                <Marker position={[-15.77972, -52.92972]}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </LayerGroup>
                        </LayersControl.Overlay>
                    </LayersControl>
                </MapContainer>
        </main>
    )
}

export default Main
