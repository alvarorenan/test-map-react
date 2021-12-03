import './App.css';
import Map from "./components/Map";
import Modal from "./components/Modal";

function App() {
  function btnAdicionar() {
    let container = document.getElementById("container");
    container.style = "  visibility: visible;"
  }
  function btnAll() {
    
  }
  function btnSantorini() {
    
  }
  function btnAcampamento() {
    
  }
  return (
  <body>
    <header>
      <img src="./assets/logo.png" alt=""/>     
    </header>
    
    <main >
      <div class="btn-group">
        <button type="button" id="btnAll" class="btn btn-success">Todos</button>
        <button type="button" id="btnSantorini" class="btn btn-primary">Igrejas</button>
        <button type="button" id="btnAcampamento" class="btn btn-danger">Acampamentos</button>
      </div>
      <div id="container">
        <Modal />
      </div>

      <button id="btnAdicionar" class="btn" onClick={btnAdicionar}>
        <img id="btnImg" src="./assets/icon.png" class="btnIcon" alt=""/>
      </button>
      <Map />
    </main>  
  </body>
  );
}

export default App;
