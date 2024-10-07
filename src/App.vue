
<template>
  <div class="align-content">
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

.font_basic_settings, h2, button {
  font-weight: 400;
  font-style: normal;
  color: var(--color-light);
  text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
}


.font_spacing {
  letter-spacing: 2px;
}

.home {
    background-color: var(--color-secondary);
    min-height: 100vh;
    min-width: 100vw !important; 
    background-size: cover;
    position: absolute;
    top:0;
    z-index: 0;
  }


  .align-content {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
  }


  button {
    background: var(--color-button-general);
    position: relative;
    background-clip: padding-box; 
    border: 2px solid transparent;
    border-radius: var(--size-font-s);
    margin-top: var(--size-font-s);
    margin-bottom: var(--size-font-s);
    letter-spacing: 3px;
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
    margin-bottom: var(--size-font-s);
    font-size: var(--size-font-m);
    /* min-width: 18.5rem; */
  }

  input, button {
    padding: var(--size-font-ss);
    /* max-width: 18.5rem; */
  }
</style>