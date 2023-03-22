<template>
  <transition name="dropdown-fade">
    <div
      v-show="isOpen"
      aria-labelledby="options-menu"
      aria-orientation="vertical"
      class="absolute right-0 mt-2 py-2 w-max bg-white rounded shadow-xl z-50"
      role="menu"
      tabindex="-1"
      @keydown.esc.exact="onEscapePress"
      @keydown.down.exact.prevent
    >
      <ul role="menu" tabindex="-1" ref="dropdown" :class="returnDropdownType">
        <li
          v-for="item in menuItems"
          :key="item.id"
          class="cursor-pointer hover:bg-gray-100"
        >
          <div class="status h-2 w-2 rounded-full bg-green"></div>
          <a
            @keydown.esc.exact="onEscapePress"
            :href="item.link"
            :target="item.target"
            class="block focus:outline-none focus:bg-gray-200 focus:text-gray-700"
            role="menuitem"
            >{{ item.name }}
            <i v-if="dropdownType == 'agentDropdownChat'"
              >({{ item.company }})</i
            ></a
          >
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Object,
      default: null,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    dropdownType: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentItem: -1,
      domMenuItems: [],
    };
  },
  computed: {
    returnDropdownType() {
      return {
        "agent-menu": this.dropdownType === "agentDropdownMenu",
        "agent-chat": this.dropdownType === "agentDropdownChat",
      };
    },
  },
  watch: {
    isOpen(val) {
      if (val === true) {
        const dropdownItems = Array.prototype.slice.call(
          this.$refs.dropdown.children
        );
        this.domMenuItems = dropdownItems;
      } else {
        this.currentItem = -1;
      }
    },
  },
  mounted() {
    window.addEventListener("keyup", this.nextItem);
  },
  beforeUnmount() {
    window.removeEventListener("keyup", this.nextItem);
  },
  methods: {
    signOut(selectedOption) {
      if (selectedOption === "Sign Out") {
        this.$store.dispatch("user/signOut");
      }
    },
    nextItem(e) {
      if (this.isOpen === true) {
        if (e.keyCode === 38 && this.currentItem > 0) {
          this.currentItem--;
          this.domMenuItems[this.currentItem].children[0].focus();
        } else if (
          e.keyCode === 40 &&
          this.currentItem < this.menuItems.length - 1
        ) {
          this.currentItem++;
          this.domMenuItems[this.currentItem].children[0].focus();
        }
        if (
          e.keyCode === 9 &&
          e.shiftKey === false &&
          this.currentItem < this.menuItems.length - 1
        ) {
          this.currentItem++;
        } else if (e.shiftKey && e.keyCode === 9 && this.currentItem > 0) {
          this.currentItem--;
        }
        console.log(this.currentItem);
      }
    },
    onEscapePress(event) {
      this.$emit("onEscapePress", event.target.value);
    },
  },
};
</script>

<style lang="postcss" scoped>
.agent-menu {
  @apply divide-y divide-gray-200;
}
.agent-menu li .status {
  @apply hidden;
}
.agent-menu li a {
  @apply px-4 py-2;
}
.agent-chat li {
  @apply flex items-center p-2;
}
.agent-chat li a {
  @apply px-2 py-0;
}
.agent-chat li img {
  @apply w-10 h-10;
}
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
.dark div {
  background-color: rgb(72, 72, 78);
}
.dark ul li:hover {
  background-color: rgba(255, 255, 255, 0.09);
}
</style>
