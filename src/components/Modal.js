import React from 'react'
import Map from './Map';
import './Modal.css';

function Modal() {
    function btnClose(){
        let container = document.getElementById("container");
        let nomeInput = document.getElementById("nomeInput");
        let descricaoInput = document.getElementById("descricaoInput");
        nomeInput.value = "";
        descricaoInput.value = "";
        container.style = "  visibility: hidden;"  
    }
    return (
          
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
            <Map id="mapModal"/>
        </div>
    
    );
}

export default Modal
