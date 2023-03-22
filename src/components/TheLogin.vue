<template>
  <div class="min-h-full flex items-center justify-center bg-gray-50">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="/images/logo.svg"
          alt="Rubiko Logo"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form
        @submit.prevent="sendingUserLogingData"
        class="mt-8 space-y-6 relative"
        action="#"
        method="POST"
      >
        <div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <BaseInput
              v-model="email"
              :error="emailError"
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email address"
            />
          </div>
          <div class="mt-4">
            <label for="password" class="sr-only">Password</label>
            <BaseInput
              v-model="password"
              id="password"
              name="password"
              type="password"
              required
              autocomplete="on"
              placeholder="Password"
              :error="passwordError"
            />
          </div>
        </div>
        <div class="flex items-center content-center justify-center">
          <div class="text-sm">
            <BaseLink> Forgot your password? </BaseLink>
          </div>
        </div>
        <div>
          <BaseButton class="w-full" type="submit" buttonType="btnPrimary"
            >Sign In</BaseButton
          >
        </div>
        <BaseNotificationContainer class="absolute -bottom-14 left-0 right-0" />
      </form>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import BaseLink from "./BaseLink.vue";
import BaseInput from "./BaseInput.vue";
import BaseNotificationContainer from "@/components/BaseNotificationContainer.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { useField, useForm } from "vee-validate";
export default {
  components: {
    BaseButton,
    BaseInput,
    BaseLink,
    BaseNotificationContainer,
  },
  setup() {
    const store = useStore();
    const connectionId = ref("");
    const validations = {
      email: (value) => {
        if (!value) return "This Field Is Required";
        const regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(String(value).toLowerCase())) {
          return "Please enter a valid email address";
        }
        return true;
      },
      password: (value) => {
        const requiredMessage = "This Field Is Required";
        if (value === undefined || value === null) return requiredMessage;
        if (!String(value).length) return requiredMessage;
        return true;
      },
    };
    useForm({
      validationSchema: validations,
    });
    const { value: email, errorMessage: emailError } = useField("email");
    const { value: password, errorMessage: passwordError } =
      useField("password");
    const error_message = ref("");
    function sendingUserLogingData() {
      let userData = {
        email: email.value,
        password: password.value,
      };
      store.dispatch("user/signIn", userData, {
        root: true,
      });
    }
    return {
      sendingUserLogingData,
      connectionId,
      email: email,
      emailError: emailError,
      error_message,
      password,
      passwordError,
    };
  },
};
</script>

<style lang="postcss" scoped></style>
