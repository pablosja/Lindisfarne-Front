<template>
    <body>
      <h2>Lindisfarne</h2>
      <div id="storyBox">StoryBox StoryBox StoryBox StoryBox StoryBox StoryBox.</div>
      <div class="storyBtns">
        <div class="optBtns">
          <button id="optAbtn">Option A</button>
          <button id="optBbtn">Option B</button>
          <button id="optCbtn">Option C</button>
        </div>
        <div class="smallBtns">
          <button id="backBtn">Atrás</button>
          <button id="endBtn">Fin</button>
          <button id="continueBtn">Continuar</button>
        </div>
      </div>
    </body>
  </template>
  
  <script>
  export default {
    name: 'StoryView'
  };
  </script>
  
  <style scoped>
  body {
    background-image: url('../assets/monastery.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  
  body::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
  
  h2 {
    font-family: "Metal Mania", system-ui;
    font-size: 36px;
    font-weight: 400;
    font-style: normal;
    color: white;
    z-index: 2;
  }
  
  #storyBox {
    font-family: "Metamorphous", serif;
    font-size: 13px;
    background: rgba(0, 0, 0, 0.8);
    width: 80%;
    height: 50%;
    padding: 5%; /* Padding del 5% alrededor del contenido */
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 2;
    color: white;
    text-align: left; /* Alineación a la izquierda */
    overflow-y: auto;
  }
  
  .storyBtns {
    z-index: 2;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .optBtns button {
    width: 100%; /* Los botones ocupan todo el ancho de storyBox */
    margin-bottom: 10px;
  }
  
  #optAbtn, #optBbtn, #optCbtn, #backBtn, #endBtn, #continueBtn {
    background: linear-gradient(to bottom, #000000, #252525);
    color: white;
    border: none;
    border-radius: 15px;
    padding: 15px;
    font-size: 16px;
    font-family: "Metamorphous", serif;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  #optAbtn:hover, #optBbtn:hover, #optCbtn:hover, #backBtn:hover, #endBtn:hover, #continueBtn:hover {
    background-color: #333333; /* Cambio de color en hover */
    transform: scale(1.05); /* Efecto de agrandamiento en hover */
  }
  
  .smallBtns {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
  }
  
  .smallBtns button {
    width: 30%; /* Cada botón ocupa el 30% del ancho disponible */
    margin: 0 10px; /* Espacio lateral entre botones */
  }
  
  @media (max-width: 768px) {
    #storyBox {
      width: 90%;
      height: 50%;
    }
  
    .storyBtns, .smallBtns {
      width: 90%;
    }
  }
  </style>
  