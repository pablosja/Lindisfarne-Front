<template>
      <Header />
  <div>
    <MainMenu />
    <div>
      <AuthForm :isLogin="isLogin" @toggleView="toggleView" />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import MainMenu from '../components/MainMenu.vue';

export default {
  components: {
    Header,
    MainMenu
  },
  data() {
    return {
      isLogin: true
    };
  },
  methods: {
    toggleView() {
      this.isLogin = !this.isLogin;
    },
    goToLogin() {
      this.$router.push({ name: 'LoginView' }); // Redirige a LoginView
    },
    goToStory() {
      this.$router.push({ name: 'StoryView' }); // Redirige a StoryView
    }
  }
};
</script>


<style>
</style>
