<template>
  <div class="home align-content">
    <div class="thanks">
        <h2 class="text-h2 font_basic_settings font_spacing">Gracias por leer</h2>
        <h1 class="main-title font_basic_settings">Única Salida</h1>
        <h3 class="text-h3 font_basic_settings font_spacing">Autor y Desarrollador</h3>
        <h3 class="text-h3 font_basic_settings font_spacing">Pablo San José</h3>
    </div>
    <button class="backToMMbutton" @click="handleBack">Volver al Menú Principal</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const handleBack = () => {
      router.push('/home');
    };

    return { handleBack };
  }
};
</script>
  
  <style>
.thanks {
    text-align: center; /* Centrar texto */
    position: relative;
    margin: auto auto auto auto;
    display: flex;
    flex-direction: column;
  }
  
  .main-title {
    font-family: var(--primary-font-family);
    font-size: var(--size-font-sb); /* Tamaño de fuente del texto thx1 */
    margin: var(--size-font-ss);
    line-height: var(--size-font-sb); 
  }
  
  .text-h2 {
    font-family: var(--secondary-font-family);
    font-size: var(--size-font-mm); 
  }

  .text-h3 {
    font-family: var(--secondary-font-family);
    font-size: var(--size-font-s); 
  }
  
  .backToMMbutton {
    margin: 0 auto var(--size-font-sb) auto;
    border-radius: var(--size-font-b);
    padding: var(--size-font-ss); 
    font-family: var(--primary-font-family);
    font-size: var(--size-font-ss);
    letter-spacing: 1px !important;
  }
  </style>
  