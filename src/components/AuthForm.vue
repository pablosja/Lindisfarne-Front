<template>
    <div class="login-form">
      <!-- Botones de Nuevo Lector y Cargar Lector siempre fijos en la parte superior -->
      <div class="button-group">
        <button type="button" :class="{'active': !isLogin}" @click="setRegister">Nuevo Lector</button>
        <button type="button" :class="{'active': isLogin}" @click="setLogin">Cargar Lector</button>
      </div>
  
      <!-- Contenedor para los inputs, con un espacio reservado para Confirmar contraseña -->
      <div class="input-group">
        <input type="text" v-model="username" placeholder="Nombre de Lector" required />
        <input type="password" v-model="password" placeholder="Contraseña" required />
        <!-- Espacio reservado para el campo de Confirmar contraseña, se muestra solo en el modo de registro -->
        <input type="password" v-model="confirmPassword" placeholder="Confirmar contraseña" :class="{'hidden': isLogin}" />
      </div>
  
      <!-- Botón de aceptar siempre fijo en la parte inferior -->
      <button type="button" class="submit-button" @click="handleSubmit">{{ isLogin ? 'Aceptar' : 'Aceptar' }}</button>
    </div>
  </template>
  
  <script>
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
      handleSubmit() {
        if (this.isLogin) {
          console.log('Cargar Lector:', this.username, this.password);
        } else {
          console.log('Nuevo Lector creado:', this.username, this.password, this.confirmPassword);
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
  
  <style scoped>
  /* Estilos para centrar el componente en pantalla */
  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Asegura que los botones estén arriba y el botón de aceptar abajo */
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    width: 300px;
    min-height: 400px; /* Asegura que el tamaño del formulario sea constante */
    font-family: "Metamorphous", serif;
    color: white;
  }
  
  /* Estilos de los botones de selección (Nuevo Lector y Cargar Lector) */
  .button-group {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .button-group button {
    flex: 1;
    margin: 0 5px;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-family: "Metamorphous", serif;
  }
  
  .button-group button.active {
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  /* Contenedor de los inputs para garantizar una estructura fija */
  .input-group {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  input {
    margin-bottom: 15px;
    padding: 10px;
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    font-family: "Metamorphous", serif;
    font-size: 14px;
  }
  
  input::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  
  /* Espacio reservado para "Confirmar contraseña" si no se muestra */
  input.hidden {
    visibility: hidden; /* Esconde el campo pero mantiene su espacio */
  }
  
  /* Estilos del botón de submit */
  .submit-button {
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Metamorphous", serif;
    font-size: 16px;
  }
  
  .submit-button:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  /* Media query para hacer el componente responsivo */
  @media (max-width: 480px) {
    .login-form {
      width: 90%;
      padding: 15px;
      min-height: 360px; /* Ajuste para pantallas más pequeñas */
    }
    
    .button-group button {
      font-size: 14px;
      padding: 8px;
    }
    
    input {
      font-size: 12px;
      padding: 8px;
    }
    
    .submit-button {
      font-size: 14px;
      padding: 8px 15px;
    }
  }
  </style>
  