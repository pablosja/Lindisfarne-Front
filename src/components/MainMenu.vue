<template>
    <div class="login-form">
      <!-- Botones centrados y distribuidos equidistantemente -->
      <div class="button-group">
        <button type="button" @click="navigateTo('nuevaLectura')">Nueva Lectura</button>
        <button type="button" @click="navigateTo('cargarLectura')">Cargar Lectura</button>
        <button type="button" @click="navigateTo('atras')">Atrás</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      navigateTo(view) {
        // Redirige al usuario a la vista correspondiente
        this.$router.push({ name: view });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos para centrar el componente en pantalla */
  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Distribuye los botones equidistantemente */
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    width: 300px;
    height: 300px; /* Altura fija para el componente */
    font-family: "Orbitron", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
    color: white;
  }
  
  /* Estilos de los botones */
  .button-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Espaciado equidistante entre botones */
    height: 100%; /* Ocupa toda la altura del contenedor */
    width: 100%; /* Ocupa toda la anchura del contenedor */
  }
  
  .button-group button {
    flex: 1; /* Ocupa el mismo espacio */
    margin: 5px 0; /* Margen entre botones */
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-family: "Orbitron", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  }
  
  /* Estilos del botón de submit */
  .button-group button:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Solo efecto hover */
  }
  
  /* Media query para hacer el componente responsivo */
  @media (max-width: 480px) {
    .login-form {
      width: 90%;
      height: auto; /* Ajusta la altura automáticamente */
      padding: 15px;
    }
    
    .button-group button {
      font-size: 14px;
      padding: 8px;
    }
  }
  </style>
  