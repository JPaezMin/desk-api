<template>
  <div
    class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
  >
    <div
      class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"
    >
      <div class="divide-y divide-gray-300/50">
        <div class="space-y-2 py-2 text-base leading-7 text-gray-600">
          <h1>
            <img
              class="mx-auto h-12 w-auto"
              src="/images/logo.svg"
              alt="Rubiko Logo"
            />
          </h1>
          <h2 class="py-2 text-center">Desk UI</h2>
          <ul class="py-4 space-y-4">
            <li class="flex items-center">
              <span class="font-bold">Current Front End Version:</span>
              <span class="ml-4">{{ frontEndVersion }}</span>
            </li>
            <li class="flex items-center">
              <span class="font-bold">Current Back End Version:</span>
              <span class="ml-4">{{ backEndVersion }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import settings from "@/services/SettingsService";
import HealthService from "@/services/HealthService.js";
import { ref } from "vue";
export default {
  setup() {
    const frontEndVersion = settings.RUBIKO_APP_VERSION;
    let backEndVersion = ref(null);
    HealthService.getBackEndVersion()
      .then((response) => {
        if (response.status === 200) {
          let responseString = response.data;
          console.log(responseString);
          backEndVersion.value = responseString.slice(
            30,
            responseString.indexOf(`.0, Culture`)
          );
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          console.log("Error in Response");
        }
      });
    return {
      backEndVersion,
      frontEndVersion,
    };
  },
};
</script>

<style lang="scss" scoped></style>
