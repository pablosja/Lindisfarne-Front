<template>
  <div class="form-style font_basic_settings">
    <div class="button-group text-h2">
      <button class="form-button" type="button" :class="{'active': !isLogin}" @click="setRegister">Nuevo Lector</button>
      <button class="form-button" type="button" :class="{'active': isLogin}" @click="setLogin">Cargar Lector</button>
    </div>

    <div class="input-group">
      <label>Nombre de Lector</label>
      <input type="text" v-model="username" placeholder="Nombre de Lector" required />
      <label>Contraseña</label>
      <input type="password" v-model="password" placeholder="Contraseña" required />
      <label v-if="!isLogin">Confirmar contraseña</label>
      <input type="password" v-model="confirmPassword" placeholder="Confirmar contraseña" v-if="!isLogin" />
    </div>

    <button type="button" class="submit-button form-button" @click="handleSubmit">{{ isLogin ? 'Aceptar' : 'Registrar' }}</button>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router'; // Importa useRouter

export default {
  props: ['isLogin'],
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      isLogin: false
    };
  },
  setup() {
    const router = useRouter(); // Define el router

    return { router }; // Retorna el router
  },
  methods: {
    async handleSubmit() {
      if (this.isLogin) {
        try {
          const response = await axios.get('http://localhost:8080/api/v1/login', {
            params: { // Cambia a params para enviar datos GET correctamente
              username: this.username,
              password: this.password
            }
          });
          console.log('Login exitoso:', response.data);
          this.$emit('loginSuccess');
          this.router.push('/home'); // Redirige a HomeView
        } catch (error) {
          console.error('Error en login:', error);
          alert('Error en el inicio de sesión. Por favor, verifica tus credenciales.');
        }
      } else {
        if (this.password !== this.confirmPassword) {
          alert('Las contraseñas no coinciden');
          return;
        }

        try {
          const response = await axios.post('http://localhost:8080/api/v1/register', {
            username: this.username,
            password: this.password
          });
          console.log('Registro exitoso:', response.data);
          this.$emit('registerSuccess');
          this.router.push('/home'); // Redirige a HomeView
        } catch (error) {
          console.error('Error en registro:', error);
          alert('Error en el registro. Por favor, intenta nuevamente.');
        }
      }
    },
    setLogin() {
      this.isLogin = true;
      this.$emit('toggleView', true);
    },
    setRegister() {
      this.isLogin = false;
      this.$emit('toggleView', false);
    }
  }
};
</script>
  
  <style>
.form-style {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-right: var(--size-font-b);
  padding-left: var(--size-font-b);
  padding-top: var(--size-font-b);
  padding-bottom: var(--size-font-b);
  min-height: 400px;
  position: relative;
  margin: var(--size-font-bb) auto;
  color: #FFF;
  background: var(--color-primary);
  background-clip: padding-box; 
  border: solid 2px transparent;
  border-radius: var(--size-font-sm);
}

.form-style::after {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0; 
    z-index: -4;
    margin: -2px; 
    border-radius: inherit; 
    background: var(--color-border-gradient);
    box-shadow: var(--color-box-shadow);
  }

  .form-style::before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0; 
    z-index: -3;
    border-radius: inherit; 
    background-color: var(--color-secondary);
  }

  .button-group, .input-group{
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    /* align-items: center; */
  }

  .form-button {
    font-size: var(--size-font-m);
    /* min-width: 18.5rem; */

  }

  label, .basic-text {
    font-size: var(--size-font-ss);
    font-family: var(--secondary-font-family);
    letter-spacing: 1.9px;
    line-height: var(--size-font-s); 
  }

  label{
    line-height: var(--size-font-m); 
    padding-left: 5px !important;
  }

  button, input {
     border-radius: var(--size-font-s);
     padding-top: var(--size-font-s);
     padding-bottom: var(--size-font-s);
     padding-right: var(--size-font-m);
     padding-left: var(--size-font-m);
     width: 19rem; 
     font-family: var(--secondary-font-family);
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  </style>
  