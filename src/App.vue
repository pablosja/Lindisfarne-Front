
<template>
  <div  class="home" >
    <RouterView />
  </div>
</template>

<script>
import Home from './views/HomeView.vue';
import { RouterView } from 'vue-router'

export default {
  components: {
    Home,
    RouterView
  }
};
</script>

<style>
:root {
  /* FONTS */
  --primary-font-family: "Black Ops One", system-ui;
  --secondary-font-family: "Orbitron", sans-serif;
  --font-weight: 400;

  /* SIZES */
  
  /* SPACING */ 

  /* X/2 */  --size-ss: calc(var(--size-sm) / 2);  
  /*  X */   --size-s:  0.1rem;                     
  /* X */    --size-sm: 1rem;
  /* X/2 */  --size-ssmm: calc(var(--size-sm) * 0.7);  
  /* 2X */   --size-ssm: calc(var(--size-sm) * 2); 
  /* 3X */   --size-smm: calc(var(--size-sm) * 3);    
  /* 4X */   --size-m:  calc(var(--size-sm) * 4);  
  /* 6X */   --size-b:  calc(var(--size-sm) * 6);  
  /* 8X */   --size-sb: calc(var(--size-sm) * 8);  
 
  /* FONT SIZE */
  /* X-10 */ --size-font-ss: calc(var(--size-font-sm) * 0.55);  
  /* X-5 */  --size-font-s:  calc(var(--size-font-sm) * 0.75);  
  /* X */    --size-font-sm: 1.3rem;                            
  /* X+10 */ --size-font-m:  calc(var(--size-font-sm) * 1.04);   
  /* 3X */   --size-font-b:  calc(var(--size-font-sm) * 3.03);  
  /* 4X */   --size-font-sb: calc(var(--size-font-sm) * 4);   
 
   /* SIZES */
  --h-small-size: 5vh;  /* 10px */
  --h-medium-size: 50vh;  /* 20px */
  --h-big-size: 10vh;  /* 40px */
  
  --w-small-size: 5vw;  /* 10px */
  --w-medium-size: 85vw;  /*0px */
  --w-big-size: 25vw;  /* 40px */

  /* COLORS */
  
  --color-primary:linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(12, 12, 12, 0.8)); 
  --color-secondary:rgb(60, 60, 60);
  --color-button-general:linear-gradient(to bottom, rgb(7, 7, 7), rgba(34, 34, 34)); 
  --color-button-nav:linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(37, 37, 37, 0.8)); 
  --color-header-gradient: linear-gradient(to right, #444444 0%, #ffffff 50%, #444444 100%);
  /* BG BUTTON ACTIVE */ --color-button-active: rgba(255, 101, 122, 0.801);    
  /* BG BUTTON HOVER */  --color-button-hover: rgba(255, 240, 109, 0.89);    

  /* FONT COLOR */       --color-light: rgb(255, 255, 255);   
  /* BG TEXTBOX */       --color-dark: rgb(4, 4, 3);       

  /* BG INPUT */         --color-light-gradient: linear-gradient(to bottom, #AAAAAA, #FFFFFF);
  /* SHADOW */           --color-box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  /* BORDER GRADIENT */  --color-border-gradient:linear-gradient(
                          to bottom, /* Dirección del gradiente */
                      rgb(68, 68, 68), /* #444444 al 70% de opacidad */
                      rgb(255, 255, 255), /* #FFFFFF al 70% de opacidad */
                      rgba(68, 68, 68), /* #444444 al 70% de opacidad */
                      rgba(0, 0, 0) /* #000000 al 70% de opacidad */
                          ) ; /* El gradiente se usa como borde */
                          
}
 

.font_basic_settings, h2, button {
  font-weight: 400;
  font-style: normal;
  color: var(--color-light);
}

.font_spacing {
  letter-spacing: 2px;
}

.home {
    background-color: var(--color-secondary);
    min-height: 100vh;
    min-width: 100vw; 
    position: absolute;
    top:0;
    z-index: -10;
    display: flex;
    flex-direction: column;
  }

  button {
    background: var(--color-button-general);
    position: relative;
    background-clip: padding-box; 
    border: 2px solid transparent;
    border-radius: var(--size-font-ss);
    margin-top: var(--size-sm);
    margin-bottom: var(--size-sm);
    letter-spacing: 3px;
    
  }

  
  button:active {
    background: var(--color-button-active);
  }

  button:hover {
    background: var(--color-button-hover);
  }


  button::after {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0; 
    z-index: -1;
    margin: -2px; 
    border-radius: inherit; 
    background: var(--color-border-gradient);
  }

  button::before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0; 
    z-index: -2;
    margin: -2px; 
    border-radius: inherit; 
    background-color: white;
  }


  input {
    margin-bottom: var(--size-sm);
    font-size: var(--size-font-m);
    min-width: 18.5rem;
  }


  input, button {
    padding: var(--size-font-sm);
    max-width: 18.5rem;
  }

</style>