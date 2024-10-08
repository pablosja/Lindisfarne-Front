<template>
    <header>
      <h1>Lindisfarne</h1>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  };
  </script>
  
  <style scoped>
  header {
    padding: 20px;
    text-align: center;
    color: white;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    font-family: "Black Ops One", system-ui;
  font-weight: 400;
  font-style: normal;
  }
  
  /* Ajustes para dispositivos más pequeños */
  @media (max-width: 768px) {
    header {
      padding: 15px;
    }
    
    h1 {
      font-size: 24px; /* Reducir el tamaño de la fuente */
    }
  }
  
  /* Ajustes para dispositivos muy pequeños (teléfonos en orientación vertical) */
  @media (max-width: 480px) {
    header {
      padding: 10px;
    }
    
    h1 {
      font-size: 20px; /* Reducir aún más el tamaño de la fuente */
    }
  }
  </style>
  