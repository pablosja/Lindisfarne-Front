<template>
  <body>
    <h2>Sin Salida</h2>
    <div id="storyBox">{{ currentStoryPage.story }}</div>
    <div class="storyBtns">
      <div class="optBtns" v-if="currentStoryPage.isMultipleOptions">
        <button id="optAbtn" @click="handleOptionA(currentStoryPage.nextPage[0].nextPage)">
          {{ currentStoryPage.nextPage[0].btnText }}
        </button>
        <button id="optBbtn" @click="handleOptionB(currentStoryPage.nextPage[1].nextPage)">
          {{ currentStoryPage.nextPage[1].btnText }}
        </button>
      </div>
      <div class="smallBtns">
        <button id="backBtn" v-if="showBackBtn" @click="goBack">Atrás</button>
        <button id="endBtn" v-if="isEndPage" @click="handleFinishStory">Fin</button>
        <button id="continueBtn" v-if="!currentStoryPage.isMultipleOptions && !isEndPage" @click="goToNextPage">Continuar</button>
      </div>
    </div>
  </body>
</template>

<script>
import jsonData from '../story.json';
import { useStoryStore } from '../stores/useStoryStore';
import { computed } from 'vue';
import { useRouter } from 'vue-router';  // Importar el router

export default {
  name: 'StoryView',
  setup() {
    const storyStore = useStoryStore();
    const router = useRouter();  // Crear una instancia del router

    const handleFinishStory = () => {
      // Limpia la persistencia de datos y navega a la vista de cierre
      storyStore.resetStory(); // Reinicia los datos
      goToClosing('ClosingView');  // Navega a la vista de cierre
    };

    const currentStoryPage = computed(() => {
      return jsonData.pages.find(page => page.id === storyStore.currentPage);
    });

    const showBackBtn = computed(() => {
      return [1, 2, 5, 8, 11, 12].includes(storyStore.currentPage);
    });

    const isEndPage = computed(() => {
      return [13, 14].includes(storyStore.currentPage);
    });

    const goToNextPage = () => {
      if (currentStoryPage.value.id === 12) {
        if (storyStore.optAClicks > storyStore.optBClicks) {
          storyStore.goToPage(13);
        } else {
          storyStore.goToPage(14);
        }
      } else {
        const nextPageId = currentStoryPage.value.nextPage[0].nextPage; // Suponiendo que el siguiente paso siempre será el primero
        storyStore.goToPage(nextPageId);
      }
    };

    const goToClosing = () => {
      router.push('/closing'); // Redirige a HomeView
    };

    const goBack = () => {
      if (storyStore.currentPage === 1) {
        router.push("/home");
      } else {
        storyStore.goBack();  // Si no, regresar a la página anterior
      }
    };

    const handleOptionA = (nextPageId) => {
      storyStore.incrementOptA();
      storyStore.goToPage(nextPageId);
    };

    const handleOptionB = (nextPageId) => {
      storyStore.incrementOptB();
      storyStore.goToPage(nextPageId);
    };

    return {
      currentStoryPage,
      goToNextPage,
      goBack,
      handleOptionA,
      handleOptionB,
      showBackBtn,
      isEndPage,
      handleFinishStory,
    };
  }
};
</script>



<style scoped>
/* Fondo y diseño general */
body {
  background-color: rgb(60, 60, 60);
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

body::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

/* Estilo del título */
h2 {
  font-family: "Black Ops One", system-ui;
  font-weight: 400;
  font-style: normal;
  color: white;
  z-index: 2;
  font-size: 60px;
}

/* Cuadro de historia */
#storyBox {
  font-family: "Orbitron", system-ui;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.8);
  width: 80%;
  height: 60%;
  padding: 5%; /* Padding alrededor del contenido */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  color: white;
  text-align: left; /* Alineación a la izquierda */
  overflow-y: auto;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, rgb(235, 235, 235), rgb(15, 15, 15))
    1; /* Borde con gradiente */
}

/* Contenedor de los botones */
.storyBtns {
  z-index: 2;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

/* Botones de opciones */
.optBtns button {
  width: 100%; /* Los botones ocupan todo el ancho del storyBox */
  margin-bottom: 10px;
  font-family: "Orbitron", system-ui;
}

/* Estilos generales de botones */
#optAbtn,
#optBbtn,
#optCbtn,
#backBtn,
#endBtn,
#continueBtn {
  background: linear-gradient(to bottom, #000000, #252525);
  color: white;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, rgb(235, 235, 235), rgb(15, 15, 15))
    1; /* Borde con gradiente */
  border-radius: 15px;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

/* Efecto hover para los botones */
#optAbtn:hover,
#optBbtn:hover,
#optCbtn:hover,
#backBtn:hover,
#endBtn:hover,
#continueBtn:hover {
  background-color: #333333;
  transform: scale(1.05);
}

/* Botones pequeños */
.smallBtns {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}

.smallBtns button {
  width: 30%; /* Cada botón ocupa el 30% del ancho disponible */
  margin: 0 10px;
  font-family: "Black Ops One", system-ui;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  #storyBox {
    width: 90%;
    height: 50%;
  }

  .storyBtns,
  .smallBtns {
    width: 90%;
  }
}
</style>
