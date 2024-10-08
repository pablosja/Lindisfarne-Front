<template>
  <div class="home">
    <div class="thanks">
      <div class="thx2">
        <p>Gracias por leer</p>
      </div>
      <div class="thx1">
        <p>Lindisfarne</p>
      </div>
      <div class="thx3">
        <p>Autor y Desarrollador</p>
      </div>
      <div class="thx3">
        <p>Pablo San José</p>
      </div>
    </div>
    <button class="backToMMbutton" @click="handleBack">Volver al Menú Principal</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'; // Asegúrate de importar useRouter

export default {
  setup() {
    const router = useRouter(); // Inicializa el router

    const handleBack = () => {
      router.push('/home'); // Redirige a HomeView
    };

    return { handleBack }; // Devuelve la función para usarla en el template
  }
};
</script>
  
  <style scoped>
  .home {
    background-color: rgb (60, 60, 60);
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; /* Espaciado para que el botón esté en la parte inferior */
    position: relative;
    overflow: hidden;
  }
  
  .thanks {
    color: rgb(255, 255, 255);
    text-align: center; /* Centrar texto */
    flex: 1; /* Permite que el contenedor de texto ocupe el espacio disponible */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centra el texto verticalmente */
    z-index: 2;
  }
  
  .thx1 {
    font-family: "Black Ops One", system-ui;
  font-weight: 400;
  font-style: normal;
    font-size: 120px; /* Tamaño de fuente del texto thx1 */
  }
  
  .thx2 {
    font-family: "Orbitron", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  }

  .thx3 {
    font-family: "Orbitron", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  }
  
  .backToMMbutton {
    background: linear-gradient(to bottom, #000000, #252525); /* Degradado de arriba a abajo */
    color: white; /* Color del texto del botón */
    border: none; /* Sin borde */
    border-radius: 5px; /* Bordes redondeados */
    padding: 15px 30px; /* Padding del botón */
    font-size: 16px; /* Tamaño de fuente del botón */
    font-family: "Black Ops One", system-ui;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
    cursor: pointer; /* Cursor de puntero */
    margin-bottom: 140px; /* Espacio en la parte inferior */
    z-index: 2;
  }
  
  .backToMM:hover {
    opacity: 0.9; /* Efecto hover */
  }
  
  .home::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8); /* Oscurece la imagen */
    z-index: 1; /* Asegura que esté por encima del fondo */
  }
  </style>
  