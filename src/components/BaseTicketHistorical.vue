<template>
  <div>
    <BaseTabsWrapper :defaultTagMenu="false" class="mt-4">
      <BaseTab v-for="tabTitle in tabMenu" :key="tabTitle" :title="tabTitle">
        <ul class="divide-y divide-gray-200 h-[250px] overflow-y-scroll pb-4">
          <li
            v-for="gamer in historic"
            :key="gamer.id"
            class="py-2 pl-2 hover:bg-gray-50 text-sm"
          >
            <h3 class="block font-bold text-base">
              {{ gamer.first_name }}
              {{ gamer.last_name }}
            </h3>
            <div class="row flex py-1">
              <span class="font-semibold">Chat ended:</span>
              <span class="ml-2"> {{ gamer.time }}</span>
            </div>
            <div class="row flex py-1">
              <span class="font-semibold">Email:</span>
              <span class="ml-2">
                {{ gamer.email }}
              </span>
            </div>
            <div class="row flex py-1">
              <span class="font-semibold">Telephone:</span>
              <span class="ml-2">
                {{ gamer.phone }}
              </span>
            </div>
            <div class="row flex py-1">
              <span class="font-semibold">Notes:</span>
              <span span class="ml-2">
                {{ gamer.notes }}
              </span>
            </div>
          </li>
        </ul>
      </BaseTab>
    </BaseTabsWrapper>
  </div>
</template>

<script>
import BaseTabsWrapper from "@/components/BaseTabsWrapper.vue";
import BaseTab from "@/components/BaseTab.vue";
export default {
  components: {
    BaseTabsWrapper,
    BaseTab,
  },
  data() {
    return {
      historic: [
        {
          id: 1,
          first_name: "Clare",
          last_name: "Bowden",
          email: "cbowden0@webmd.com",
          phone: "547-358-4045",
          notes:
            "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          time: "12/28/2021",
        },
        {
          id: 2,
          first_name: "Mari",
          last_name: "Petigrew",
          email: "mpetigrew1@webs.com",
          phone: "876-699-9816",
          notes:
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
          time: "12/22/2021",
        },
        {
          id: 3,
          first_name: "Isabelita",
          last_name: "Huntingdon",
          email: "ihuntingdon2@nymag.com",
          phone: "385-870-9355",
          notes:
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
          time: "4/4/2021",
        },
        {
          id: 4,
          first_name: "Iain",
          last_name: "Feehery",
          email: "ifeehery3@yelp.com",
          phone: "691-360-3430",
          notes:
            "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
          time: "9/10/2021",
        },
        {
          id: 5,
          first_name: "Roosevelt",
          last_name: "Milham",
          email: "rmilham4@woothemes.com",
          phone: "716-257-4071",
          notes:
            "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
          time: "6/20/2021",
        },
      ],
      tabMenu: ["All (2)", "Public (4)", "Internal (6)"],
    };
  },
};
</script>

<style lang="scss" scoped>
.dark ul li:hover {
  background-color: rgb(24, 24, 28);
}
</style>
