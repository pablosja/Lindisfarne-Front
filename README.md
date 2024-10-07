# Única Salida-Front

**Única Salida** es una historia interactiva estilo "elige tu propia aventura", donde los jugadores toman decisiones que influyen en el desarrollo y final de la narrativa. Este repositorio contiene el front-end del juego, desarrollado con Vue.js.

## Características

- Interfaz de usuario intuitiva para la interacción con la historia.
- Navegación basada en decisiones del usuario.
- Persistencia de datos utilizando Pinia para mantener el progreso del jugador.
- Comunicación con el back-end a través de Axios.

## Tecnologías Utilizadas

- **Vue.js**: Framework progresivo para construir interfaces de usuario.
- **Pinia**: Gestión de estado para Vue, utilizado para almacenar datos del usuario y del juego.
- **Axios**: Cliente HTTP para interactuar con el back-end.
- **Vue Router**: Para manejar la navegación entre diferentes vistas.

## Instalación y Ejecución

### Requisitos Previos

- **Node.js** (versión 16 o superior).
- **Vue CLI** (opcional, pero recomendable).

### Instrucciones

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tuusuario/argos-frontend.git
    ```
2. Navega a la carpeta del proyecto:
    ```bash
    cd argos-frontend
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Ejecuta el servidor de desarrollo:
    ```bash
    npm run serve
    ```
   El front-end estará disponible en `http://localhost:8080`.

## Estructura del Proyecto

- `src/`: Carpeta principal del código fuente.
  - `assets/`: Archivos estáticos como imágenes y estilos CSS.
  - `components/`: Componentes reutilizables de Vue, como botones y formularios.
  - `views/`: Vistas principales de la aplicación (historia, login, registro).
  - `services/`: Servicios que manejan la comunicación con el back-end.
  - `router/`: Configuración de las rutas de la aplicación.
  - `store/`: Configuración de Pinia para la gestión del estado.

## Uso

- Los usuarios deben registrarse o iniciar sesión en la plataforma.
- Una vez autenticado, el usuario puede comenzar la historia y tomar decisiones en cada página.
- El progreso de la historia se guarda automáticamente, permitiendo al usuario retomar su partida en cualquier momento.

## Enlaces

- Figma: https://www.figma.com/proto/TAzry5LlUA3iL5zw28RIIe/Untitled?node-id=1-34&t=JzaqT3sltxc5KIlm-1&scaling=scale-down&content-scaling=fixed
- Back-end que este proyecto consume como API: https://github.com/pablosja/UltimaSalida-Back.git!
- User Flow: [UltimaSalida-UserFlow](https://github.com/user-attachments/assets/df79bdf6-f381-4e8f-b4af-bd4129261be5)

