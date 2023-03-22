<template>
  <div>
    <ul
      class="tag-menu flex space-x-2"
      :class="defaultTagMenu ? 'default' : 'historic'"
      role="tablist"
      aria-label="Tabs Menu"
      v-if="tabIds && tabIds.length"
    >
      <li
        @click.stop.prevent="
          selectedTitle = tab.title;
          removeUpdatedTab(tab.chatSessionId);
        "
        v-for="tab in tabIds"
        :key="tab.chatSessionId"
        :title="tab.title"
        role="presentation"
        :class="{ selected: tab.title === selectedTitle }"
      >
        <a
          ref="tabTitle"
          href="#"
          role="tab"
          :class="{
            chatUpdated:
              this.updatedChatSessionsIds.findIndex(
                (id) => id === tab.chatSessionId
              ) !== -1,
          }"
        >
          {{ tab.title }}
        </a>
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { ref, computed, useSlots, provide, watch } from "vue";
import { useActions } from "vuex-composition-helpers";
export default {
  props: {
    defaultTagMenu: {
      type: Boolean,
      default: true,
    },
    updatedChatSessionsIds: {
      default: [],
    },
  },
  setup() {
    const { removeUpdatedChatSession } = useActions({
      removeUpdatedChatSession: "chatSession/removeUpdatedChatSession",
    });
    const removeUpdatedTab = (tabId) => {
      removeUpdatedChatSession(tabId);
    };
    const tabTitle = ref(null);
    const slots = useSlots();
    const tabTitles = computed(() =>
      slots.default()[0].children.map((tab) => tab.props.title)
    );
    const tabIds = computed(() =>
      slots.default()[0].children.map((tab) => {
        return {
          title: tab.props.title,
          chatSessionId: tab.props.key,
        };
      })
    );
    const tabTitlesLength = computed(() => tabIds.value.length);
    let selectedTitle = ref(tabTitles.value[0]);
    provide("selectedTitle", selectedTitle);
    provide("tabTitles", tabTitles);
    watch(tabTitlesLength, (currentValue, oldValue) => {
      if (currentValue < oldValue) {
        selectedTitle.value = tabTitles.value[0];
      }
    });
    return {
      removeUpdatedTab,
      tabIds,
      tabTitles,
      selectedTitle,
      tabTitle,
      tabTitlesLength,
    };
  },
};
</script>

<style lang="postcss" scoped>
#content > div > .tag-menu.default li a.chatUpdated {
  @apply !block !border-2 !border-red-700;
}
.tag-menu li a {
  @apply block bg-transparent cursor-pointer duration-150 ease-in-out transition focus:outline-none  leading-5  py-1 px-4;
}
.tag-menu.default li a {
  @apply order-2 border-2 border-mineralGreen-900 hover:text-white hover:bg-mineralGreen-900 text-mineralGreen-900;
}
.tag-menu.default li.selected a {
  @apply bg-mineralGreen-900 text-white;
}
.tag-menu.historic {
  @apply border-b-2 border-gray-200;
}
.tag-menu.historic {
  @apply justify-center;
}
.tag-menu.historic li:not(.selected) a:hover {
  @apply text-blue-700;
}
.tag-menu.historic li.selected a {
  @apply order-2 text-gray-700 border-b-4 border-blue-700;
}
.dark .tag-menu.historic li a {
  color: rgba(255, 255, 255, 0.9);
}
.dark .tag-menu.default li a {
  border: 2px solid rgb(255, 255, 255, 0.1);
  background-color: rgb(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
}
.dark .tag-menu.default li.selected a {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
