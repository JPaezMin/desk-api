<template>
  <div class="relative">
    <div class="bg-blue-700 px-3 py-2 flex items-center justify-between">
      <span class="text-white">Team</span>
      <button
        class="block z-10 cursor-pointer text-white focus:outline-none focus:ring transform transition-transform ml-4"
        :class="{ 'rotate-180': isOpen }"
        aria-haspopup="true"
        aria-expanded="true"
        @click="isOpen = !isOpen"
        @keydown.down.exact="preventDefaultOnArrowDownKey"
        @keydown.space.exact.prevent="isOpen = !isOpen"
        @keydown.esc.exact="isOpen = false"
        @keydown.shift.tab="isOpen = false"
      >
        <i class="fas fa-chevron-down"></i>
      </button>
      <button
        v-if="isOpen"
        class="fixed inset-0 h-full w-full cursor-default"
        tabindex="-1"
        @click="(isOpen = false), (currentItem = 0)"
      ></button>
    </div>
    <BaseDropdown
      :dropdownType="agentDropdownMenu"
      :menuItems="agentsOnChat"
      :isOpen="isOpen"
      @onEscapePress="closeDropDown"
    />
  </div>
</template>

<script>
import BaseDropdown from "./BaseDropdown.vue";
export default {
  components: {
    BaseDropdown,
  },
  data() {
    return {
      agentsOnChat: [
        {
          id: 1,
          name: "Eric",
          link: "/",
          company: "Rubiko",
        },
        {
          id: 2,
          name: "Amanda",
          link: "/",
          company: "External",
        },
        {
          id: 3,
          name: "Chayse",
          link: "/",
          company: "Rubiko",
        },
        {
          id: 4,
          name: "Antonia",
          link: "/",
          company: "External",
        },
        {
          id: 5,
          name: "Maria",
          link: "/",
          company: "Rubiko",
        },
        {
          id: 6,
          name: "Cheyenne",
          link: "/",
          company: "External",
        },
      ],
      isOpen: false,
      agentDropdownMenu: "agentDropdownChat",
    };
  },
  methods: {
    closeDropDown() {
      this.isOpen = false;
    },
    preventDefaultOnArrowDownKey(event) {
      if ((this.isOpen = true)) {
        event.preventDefault();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
