<template>
  <div class="form-style font_basic_settings">
    <div class="button-group text-h2">
      <button  class="form-button" type="button" :class="{'active': !isLogin}" @click="setRegister">Nuevo Lector</button>
      <button  class="form-button" type="button" :class="{'active': isLogin}" @click="setLogin">Cargar Lector</button>
    </div>

    <div class="input-group">
      <label>Nombre de Lector</label><input type="text" v-model="username" placeholder="Nombre de Lector" required />
      <label>Contraseña</label><input type="password" v-model="password" placeholder="Contraseña" required />
      <label>Confirmar contraseña</label><input type="password" v-model="confirmPassword" placeholder="Confirmar contraseña" v-if="!isLogin" />
    </div>

    <button type="button" class="submit-button form-button" @click="handleSubmit">{{ isLogin ? 'Aceptar' : 'Registrar' }}</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['isLogin'],
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    async handleSubmit() {
      if (this.isLogin) {
        // Llamada de login
        try {
          const response = await axios.post('/api/v1/login', {
            username: this.username,
            password: this.password // Enviar la contraseña sin codificación Base64
          });
          console.log('Login exitoso:', response.data);
          this.$emit('loginSuccess');
        } catch (error) {
          console.error('Error en login:', error);
          alert('Error en el inicio de sesión. Por favor, verifica tus credenciales.');
        }
      } else {
        // Validar confirmación de contraseña
        if (this.password !== this.confirmPassword) {
          alert('Las contraseñas no coinciden');
          return;
        }

        // Llamada de registro
        try {
          const response = await axios.post('/api/v1/register', {
            username: this.username,
            password: this.password // Enviar la contraseña sin codificación Base64
          });
          console.log('Registro exitoso:', response.data);
          this.$emit('registerSuccess');
        } catch (error) {
          console.error('Error en registro:', error);
          alert('Error en el registro. Por favor, intenta nuevamente.');
        }
      }
    },
    setLogin() {
      this.$emit('toggleView', true);
    },
    setRegister() {
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

  padding-right: var(--size-ssm);
  padding-left: var(--size-ssm);
  padding-top: var(--size-sm);
  padding-bottom: var(--size-sm);
  min-height: 400px;
  max-width: 30%;
  position: relative;
  margin: var(--size-sb) auto;

  color: #FFF;
  background: var(--color-primary);
  background-clip: padding-box; 
  border: solid 2px transparent;
  border-radius: var(--size-font-m);

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
  min-width: 18.5rem;
  padding: var(--size-font-m);
}

  
  label, .basic-text {
    font-size: 0.75rem;
    font-family: var(--secondary-font-family);
    letter-spacing: 1.9px;
  }




  button, input {
     border-radius: var(--size-font-ss);
     padding-top: var(--size-font-s);
     padding-bottom: var(--size-font-s);
     padding-right: var(--size-font-sm);
     padding-left: var(--size-font-sm);
     width: 18rem; 
     font-family: var(--secondary-font-family);
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.7);
    
  }
  </style>
  