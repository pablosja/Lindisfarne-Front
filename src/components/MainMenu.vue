<template>
    <div class="form-style font_basic_settings">
      <div class="button-group">
        <router-link to = "/story"><button type="button" class="form-button" @click="handleResetStory">Nueva Lectura</button></router-link>
        <button type="button" @click="navigateTo('cargarLectura')" class="form-button" >Cargar Lectura</button>
        <router-link to = "/login"><button type="button" class="form-button" >Atrás</button></router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { useStoryStore } from "../stores/useStoryStore";

  export default {

    setup() {
      const storyStore = useStoryStore();
      const handleResetStory = () => {
    storyStore.resetStory();
    }
    return {
      handleResetStory
    }},

    methods: {
      navigateTo(view) {
        this.$router.push({ name: view });
      },
    }
  };
  </script>
  
  <style>

  </style>
  