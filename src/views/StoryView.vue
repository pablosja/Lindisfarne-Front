<template>
  <body class="align-content">
    <h2 class="font_basic_settings header-h2">Única Salida</h2>
    <div id="storyBox" class="font_basic_settings basic-text">
      <p class="story-text">{{ currentStoryPage.story }}</p>
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
        
        <div class="nav-button-grid-cell-1"><button class="nav-btn" id="backBtn" v-if="showBackBtn" @click="goBack">Atrás</button></div>
        <div class="nav-button-grid-cell-2"><button class="nav-btn" id="endBtn" v-if="isEndPage" @click="handleFinishStory">Fin</button></div>
        <div class="nav-button-grid-cell-3"><button class="nav-btn" id="continueBtn" v-if="!currentStoryPage.isMultipleOptions && !isEndPage" @click="goToNextPage">Continuar</button></div>
      </div>
      </div>
  </body>
</template>

<script>
import jsonData from "../story.json";
import { useStoryStore } from "../stores/useStoryStore";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "StoryView",
  setup() {
    const storyStore = useStoryStore();
    const router = useRouter();

    const handleFinishStory = () => {
      goToClosing("ClosingView");
    };

    const handleResetStory = () => {
    storyStore.resetStory();
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
        const nextPageId = currentStoryPage.value.nextPage[0].nextPage;
        storyStore.goToPage(nextPageId);
      }
    };

    const goToClosing = () => {
      router.push("/closing");
    };

    const goBack = () => {
      if (storyStore.currentPage === 1) {
        router.push("/home");
      } else {
        storyStore.goBack();
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
      handleResetStory
    };
  },
};
</script>

<style>

#storyBox {
  background-color: var(--color-dark);
  height: var(--h-small-size);
  width: var(--w-big-size);
  padding: var(--size-font-bb);
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
  width: var(--w-big-size);
}

.option-button-group {
  display: flex;
  flex-direction: column;
  position: relative;
  width:100%;
  margin-top:var(--size-font-ss);
  min-height: var(--size-font-sb);
}

.story-text {
    max-height: 100%;
    overflow: hidden;
}

.nav-button-group {  
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: var(--size-font-ss);
  position: relative;
  width:100%;
  margin-bottom:var(--size-font-ss);
}
.nav-button-grid-cell-1 {
  justify-self: start;
}
.nav-button-grid-cell-2 {
  justify-self: center;
}
.nav-button-grid-cell-3 {
  justify-self: end;
}


.option-btn {
  min-width:100%;
  font-family: var(--secondary-font-family);
  font-size: var(--size-font-ss); 
  margin: 0 0 var(--size-font-ss) 0;
}

 .nav-btn {
  width: 12rem;
  padding: var(--size-font-s);
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
