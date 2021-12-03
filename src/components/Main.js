import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, LayerGroup, LayersControl } from 'react-leaflet';

function Main() {
    let normalLayer = {visibility: 'visible'}

    function btnAdicionar() {
        let container = document.getElementById("container");
        container.style = "  visibility: visible;"
      }
      function btnClose(){
        let container = document.getElementById("container");
        let nomeInput = document.getElementById("nomeInput");
        let descricaoInput = document.getElementById("descricaoInput");
        nomeInput.value = "";
        descricaoInput.value = "";
        container.style = "  visibility: hidden;"  
    }
    
    
    return (
        <main >
            <div id="container">
                <div class="modal">
                <button id="btnClose" onClick={btnClose} class="btn">Fechar</button>
                    <button id="btnSalvar" class="btn">Salvar</button>
                    <button id="iconeAcampamento" class="btnMarker">
                        <img src="./assets/acampamentoIcon.png" alt=""/>
                    </button>
                    <button id="iconeSantorini" class="btnMarker">
                        <img src="./assets/santorini.png" alt=""/>
                    </button>
                    <button id="iconeNormal" class="btnMarker">
                        <img src="./assets/icon.png" alt="" id="icon"/>
                    </button>
                    
                    <div id="modalMarkerDescription">
                        <span>Nome:</span>
                        <input id="nomeInput" type="text"/>
                        <span>Descrição</span>
                        <textarea name="" id="descricaoInput" cols="30" rows="5"></textarea>
                    </div>
                        <MapContainer 
                        center={[-15.77972, -48.92972]}
                        zoom={4.5}
                        maxZoom={18}
                        minZoom={5}   
                        style={{zIndex: '0',
                            width: '90%',
                            height: '100%'
                          }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        />
    
                    </MapContainer>        
                </div>
            
            </div>

            <button id="btnAdicionar" class="btn" onClick={btnAdicionar}>
                <img id="btnImg" src="./assets/icon.png" class="btnIcon" alt=""/>
            </button>
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
                        <LayersControl.Overlay checked name="Marcadores normais">
                            <LayerGroup pathOptions={normalLayer}>  
                                <Marker position={[-15.77972, -48.92972]}>
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
