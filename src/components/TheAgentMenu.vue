<template>
  <div class="relative">
    <div class="flex items-center justify-between w-12 h-12">
      <img
        class="rounded-full border border-gray-100 shadow-sm"
        src="/images/agent-avatar.jpg"
        alt="agent image"
      />
      <div
        class="absolute top-0 right-0 h-3 w-3 my-1 border-gray-50 border-2 rounded-full bg-green z-2"
      ></div>
      <button
        class="block z-10 ml-1 cursor-pointer text-blue-700 focus:outline-none focus:ring transform transition-transform"
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
      :menuItems="menuItems"
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
      menuItems: [
        {
          id: 1,
          name: "View Profile",
          link: "/",
          target: "_self",
        },
        {
          id: 2,
          name: "About",
          link: "/about",
          target: "_blank",
        },
        {
          id: 3,
          name: "Privacy Policy",
          link: "/",
          target: "_self",
        },
        {
          id: 4,
          name: "Give Feedback",
          link: "/",
          target: "_self",
        },
        {
          id: 5,
          name: "Sign Out",
          link: "/",
          target: "_self",
        },
      ],
      isOpen: false,
      agentDropdownMenu: "agentDropdownMenu",
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
