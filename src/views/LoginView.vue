<template>
      <Header />
      <div class="form-container">
        <AuthForm :isLogin="isLogin" @toggleView="toggleView" />
      </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import AuthForm from '../components/AuthForm.vue';
  
  export default {
    components: {
      Header,
      AuthForm
    },
    data() {
      return {
        isLogin: true
      };
    },
    methods: {
      toggleView() {
        this.isLogin = !this.isLogin;
      }
    }
  };
  </script>
  
  <style>
  </style>
  