<template>
  <div class="flex">
    <button @click="prev" class="prev focus:outline-none focus:ring">
      <i class="fas fa-angle-left text-blue-700 cursor-pointer"></i>
    </button>
    <div class="carousel overflow-hidden mx-4">
      <div class="inner whitespace-nowrap" ref="inner" :style="innerStyles">
        <div
          class="pill bg-gray-100 cursor-pointer mx-1 px-2 py-1 inline-flex items-center justify-center outline-none rounded-lg text-sm text-gray-700 hover:bg-gray-300 active:bg-gray-400"
          v-for="pill in pythiaPills"
          :key="pill"
        >
          {{ pill.name }}
        </div>
      </div>
    </div>
    <button @click="next" class="next focus:outline-none focus:ring">
      <i class="fas fa-angle-right text-blue-700 cursor-pointer"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerStyles: {},
      step: "",
      pythiaPills: [
        {
          id: 1,
          name: "01. Forbidden Bonus Games",
          link: "/",
        },
        {
          id: 2,
          name: "02. KYC request, send via email",
          link: "/",
        },
        {
          id: 3,
          name: "03. downtime",
          link: "/",
        },
        {
          id: 4,
          name: "04. maintenance",
          link: "/",
        },
        {
          id: 5,
          name: "05. dc",
          link: "/",
        },
        {
          id: 6,
          name: "06. KYC request, send via email",
          link: "/",
        },
        {
          id: 7,
          name: "07. downtime",
          link: "/",
        },
        {
          id: 8,
          name: "08. maintenance",
          link: "/",
        },
        {
          id: 9,
          name: "09. dc",
          link: "/",
        },
        {
          id: 10,
          name: "10. Another One",
          link: "/",
        },
      ],
      transitioning: false,
    };
  },
  mounted() {
    this.setStep();
    this.resetTranslate();
  },
  methods: {
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalPills = this.pythiaPills.length;
      this.step = `${innerWidth / totalPills}px`;
    },
    next() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveLeft();

      this.afterTransition(() => {
        const pill = this.pythiaPills.shift();
        this.pythiaPills.push(pill);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    prev() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveRight();
      this.afterTransition(() => {
        const card = this.pythiaPills.pop();
        this.pythiaPills.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`,
      };
    },
    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`,
      };
    },
    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },
    resetTranslate() {
      this.innerStyles = {
        transition: "none",
        transform: `translateX(-${this.step})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 330px;
}
.inner {
  transition: transform 0.2s;
}
.dark .pill {
  border: 1px solid rgba(255, 255, 255, 0.09);
  background-color: rgb(24, 24, 28);
  color: rgba(255, 255, 255, 0.82);
}
.dark .pill:hover {
  @apply border border-blue-800;
}
</style>
