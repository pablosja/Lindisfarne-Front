<template>
    <div class="form-style font_basic_settings">
      <!-- Botones centrados y distribuidos equidistantemente -->
      <div class="button-group">
        <router-link to = "/story"><button type="button" class="form-button" >Nueva Lectura</button></router-link>
        <button type="button" @click="navigateTo('cargarLectura')" class="form-button" >Cargar Lectura</button>
        <router-link to = "/login"><button type="button" class="form-button" >Atrás</button></router-link>
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
  
  <style>

  </style>
  