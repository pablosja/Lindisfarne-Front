<template>
  <div class="home">
    <Header />
    <div class="form-container">
      <AuthForm :isLogin="isLogin" @toggleView="toggleView" />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import AuthForm from '../components/MainMenu.vue';

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

<style scoped>
.home {
  background-color: rgb(60,60,60,);
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; /* Necesario para el pseudo-elemento */
  overflow: hidden; /* Opcional, para evitar el desbordamiento */
}

.home::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8); /* Ajusta la opacidad para oscurecer la imagen */
  z-index: 1; /* Asegura que esté por encima del fondo */
}

.form-container {
  background: rgba(255, 255, 255, 0.0); /* Cambia a una opacidad del 80% para que se vea el fondo oscurecido */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative; /* Para asegurarse de que esté por encima del pseudo-elemento */
  z-index: 2; /* Asegura que esté por encima de la superposición */
}
</style>
