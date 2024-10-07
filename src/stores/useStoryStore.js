import { defineStore } from 'pinia';

export const useStoryStore = defineStore('story', {
  persist: true,  // Activa la persistencia

  state: () => ({
    currentPage: 1,
    previousPages: [],
    optAClicks: 0,
    optBClicks: 0
  }),

  actions: {
    goToPage(pageId) {
      if (this.currentPage) {
        this.previousPages.push(this.currentPage);
      }
      this.currentPage = pageId;
    },
    goBack() {
      if (this.previousPages.length > 0) {
        this.currentPage = this.previousPages.pop();
      }
    },
    incrementOptA() {
      this.optAClicks++;
    },
    incrementOptB() {
      this.optBClicks++;
    },
    resetStory() {
      this.currentPage = 1;
      this.previousPages = [];
      this.optAClicks = 0;
      this.optBClicks = 0;
    },
  }
});
