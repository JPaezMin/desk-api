<template>
  <header class="header">
    <div class="header__wrapper wrapper">
      <div class="container p-6 mx-auto">
        <h1>NAIVE UI: Component Testing</h1>
        <h2>Buttons</h2>
        <div class="mt-4">
          <n-space>
            <n-button>Default</n-button>
            <n-button type="tertiary"> Tertiary </n-button>
            <n-button type="primary"> Primary </n-button>
            <n-button type="info"> Info </n-button>
            <n-button type="success"> Success </n-button>
            <n-button type="warning"> Warning </n-button>
            <n-button type="error"> Error </n-button>
          </n-space>
        </div>
        <h2 class="mt-4">Dropdown</h2>
        <div class="mt-4">
          <n-dropdown
            size="small"
            trigger="hover"
            :options="options"
            @select="handleSelect"
          >
            <n-button>Select A Language</n-button>
          </n-dropdown>
        </div>
        <h2 class="mt-4">Form Elements</h2>
        <div class="mt-6">
          <n-checkbox-group v-model:value="cities">
            <n-space item-style="display: flex;">
              <n-checkbox value="Beijing" label="Beijing" />
              <n-checkbox value="Shanghai" label="Shanghai" />
              <n-checkbox value="Guangzhou" label="Guangzhou" />
              <n-checkbox value="Shenzen" label="Shenzhen" />
            </n-space>
          </n-checkbox-group>
        </div>
        <div class="mt-6 w-1/5">
          <n-input type="text" placeholder="Medium Input" />
        </div>
        <div class="mt-6">
          <n-radio-group v-model:value="valueRadio" name="radiogroup">
            <n-space>
              <n-radio
                v-for="song in songs"
                :key="song.value"
                :value="song.value"
                :label="song.label"
              />
            </n-space>
          </n-radio-group>
        </div>
        <h2 class="mt-4">Tree Select</h2>
        <div class="mt-6 w-1/5">
          <n-tree-select
            :options="treeOptions"
            default-value="Default Value"
            @update:value="handleUpdateValue"
          />
        </div>
        <h2 class="mt-4">Select</h2>
        <div class="mt-6 w-1/5">
          <n-space vertical>
            <n-select v-model:value="valueSelect" :options="selectOptions" />
            <n-select
              v-model:value="valueSelect"
              disabled
              :options="selectOptions"
            />
          </n-space>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useMessage } from "naive-ui";
import { ref } from "vue";
export default {
  setup() {
    const message = useMessage();
    return {
      valueRadio: ref(null),
      valueSelect: ref(null),
      disabled: ref(true),
      cities: ref(null),
      options: [
        {
          label: "English",
          key: "English",
          disabled: true,
        },
        {
          label: "Japanesse",
          key: "Japanesse",
        },
        {
          label: "Finish",
          key: "Finish",
        },
        {
          label: "French",
          key: "French",
        },
      ],
      songs: [
        {
          value: "Rock'n'Roll Star",
          label: "Rock'n'Roll Star",
        },
        {
          value: "Shakermaker",
          label: "Shakermaker",
        },
        {
          value: "Live Forever",
          label: "Live Forever",
        },
        {
          value: "Up in the Sky",
          label: "Up in the Sky",
        },
        {
          value: "...",
          label: "...",
        },
      ].map((s) => {
        s.value = s.value.toLowerCase();
        return s;
      }),
      treeOptions: [
        {
          label: "Rubber Soul",
          key: "Rubber Soul",
          children: [
            {
              label:
                "Everybody's Got Something to Hide Except Me and My Monkey",
              key: "Everybody's Got Something to Hide Except Me and My Monkey",
            },
            {
              label: "Drive My Car",
              key: "Drive My Car",
              disabled: true,
            },
            {
              label: "Norwegian Wood",
              key: "Norwegian Wood",
            },
            {
              label: "You Won't See",
              key: "You Won't See",
              disabled: true,
            },
            {
              label: "Nowhere Man",
              key: "Nowhere Man",
            },
            {
              label: "Think For Yourself",
              key: "Think For Yourself",
            },
            {
              label: "The Word",
              key: "The Word",
            },
            {
              label: "Michelle",
              key: "Michelle",
              disabled: true,
            },
            {
              label: "What goes on",
              key: "What goes on",
            },
            {
              label: "Girl",
              key: "Girl",
            },
            {
              label: "I'm looking through you",
              key: "I'm looking through you",
            },
            {
              label: "In My Life",
              key: "In My Life",
            },
            {
              label: "Wait",
              key: "Wait",
            },
          ],
        },
        {
          label: "Let It Be",
          key: "Let It Be Album",
          children: [
            {
              label: "Two Of Us",
              key: "Two Of Us",
            },
            {
              label: "Dig A Pony",
              key: "Dig A Pony",
            },
            {
              label: "Across The Universe",
              key: "Across The Universe",
            },
            {
              label: "I Me Mine",
              key: "I Me Mine",
            },
            {
              label: "Dig It",
              key: "Dig It",
            },
            {
              label: "Let It Be",
              key: "Let It Be",
            },
            {
              label: "Maggie Mae",
              key: "Maggie Mae",
            },
            {
              label: "I've Got A Feeling",
              key: "I've Got A Feeling",
            },
            {
              label: "One After 909",
              key: "One After 909",
            },
            {
              label: "The Long And Winding Road",
              key: "The Long And Winding Road",
            },
            {
              label: "For You Blue",
              key: "For You Blue",
            },
            {
              label: "Get Back",
              key: "Get Back",
            },
          ],
        },
      ],
      selectOptions: [
        {
          label: "Everybody's Got Something to Hide Except Me and My Monkey",
          value: "song0",
          disabled: true,
        },
        {
          label: "Drive My Car",
          value: "song1",
        },
        {
          label: "Norwegian Wood",
          value: "song2",
        },
        {
          label: "You Won't See",
          value: "song3",
          disabled: true,
        },
        {
          label: "Nowhere Man",
          value: "song4",
        },
        {
          label: "Think For Yourself",
          value: "song5",
        },
        {
          label: "The Word",
          value: "song6",
        },
        {
          label: "Michelle",
          value: "song7",
          disabled: true,
        },
        {
          label: "What goes on",
          value: "song8",
        },
        {
          label: "Girl",
          value: "song9",
        },
        {
          label: "I'm looking through you",
          value: "song10",
        },
        {
          label: "In My Life",
          value: "song11",
        },
        {
          label: "Wait",
          value: "song12",
        },
      ],
      handleSelect(key) {
        message.info(String(key));
      },
      handleUpdateValue(value, option) {
        console.log(value, option);
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
