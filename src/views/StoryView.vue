<template>
  <body class="home">
    <h2 class="font_basic_settings header-h2">Única Salida</h2>
    <div id="storyBox" class="font_basic_settings basic-text">
      {{ currentStoryPage.story }}
    </div>
    <div class="story-btns-group">
      <div class="option-button-group">
        <div class="option-button-group" v-if="currentStoryPage.isMultipleOptions">
          <button class="option-btn" 
            id="optAbtn"
            @click="handleOptionA(currentStoryPage.nextPage[0].nextPage)"
          >
            {{ currentStoryPage.nextPage[0].btnText }}
          </button>
          <button class="option-btn" 
            id="optBbtn"
            @click="handleOptionB(currentStoryPage.nextPage[1].nextPage)"
          >
            {{ currentStoryPage.nextPage[1].btnText }}
          </button>
        </div>
      </div>
      <div class="nav-button-group">
        <button class="nav-btn" id="backBtn" v-if="showBackBtn" @click="goBack">Atrás</button>
        <button class="nav-btn" id="endBtn" v-if="isEndPage" @click="handleFinishStory">
          Fin
        </button>
        <button class="nav-btn"
          id="continueBtn"
          v-if="!currentStoryPage.isMultipleOptions && !isEndPage"
          @click="goToNextPage"
        >
          Continuar
        </button>
      </div>
    </div>
  </body>
</template>

<script>
import jsonData from "../story.json";
import { useStoryStore } from "../stores/useStoryStore";
import { computed } from "vue";
import { useRouter } from "vue-router"; // Importar el router

export default {
  name: "StoryView",
  setup() {
    const storyStore = useStoryStore();
    const router = useRouter(); // Crear una instancia del router

    const handleFinishStory = () => {
      // Limpia la persistencia de datos y navega a la vista de cierre
      storyStore.resetStory(); // Reinicia los datos
      goToClosing("ClosingView"); // Navega a la vista de cierre
    };

    const currentStoryPage = computed(() => {
      return jsonData.pages.find((page) => page.id === storyStore.currentPage);
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
      router.push("/closing"); // Redirige a HomeView
    };

    const goBack = () => {
      if (storyStore.currentPage === 1) {
        router.push("/home");
      } else {
        storyStore.goBack(); // Si no, regresar a la página anterior
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
  },
};
</script>

<style>

#storyBox {
  background-color: var(--color-dark);
  min-height: var(--h-medium-size);
  width: var(--w-medium-size);
  padding: var(--h-big-size);
  border-radius: var(--size-font-m);
  position: relative;
  background-clip: padding-box; 
  border: 2px solid transparent;
}

#storyBox::after {
  content: '';
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0; 
  z-index:-2;
  margin: -2px; 
  border-radius: inherit; 
  background: var(--color-border-gradient);
  box-shadow: var(--color-box-shadow);
}

#storyBox::before {
  content: '';
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0; 
  z-index: -3; 
  margin: -2px; 
  border-radius: inherit; 
  background-color: var(--secondary-color);
}

.story-btns-group {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;   
  position: relative;
  width: var(--w-medium-size);
}

.option-button-group {
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  position: relative;
  width:100%;
  margin-top:var(--size-sm);
  min-height: var(--size-sb);
}

.nav-button-group {  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width:100%;
  margin-top:var(--size-sm);
  margin-bottom:var(--size-ssm);
}

.option-btn {
  width:100%;
  font-family: var(--secondary-font-family);
  font-size: var(--size-font-ss); 
}

 .nav-btn {
  width: 12rem;
  padding: var(--size-ssmm);
  font-family: var(--primary-font-family);
  font-size: var(--size-font-s); 
  margin: 0 0 0 0 !important; 
} 

#backBtn {
  border-radius: var(--size-font-sb)  20px  20px var(--size-font-sb);
}

#continueBtn {
  border-radius:  20px var(--size-font-sb) var(--size-font-sb)  20px;
}

#endBtn {
  border-radius: var(--size-font-sb);
}
</style>
