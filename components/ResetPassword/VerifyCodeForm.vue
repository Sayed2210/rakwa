<script setup lang="ts">
const code = ref<string>("");

</script>

<template>
  <div class="login-form">
    <NuxtLink to="/" class="back-link">
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.75 14.75L1 8L7.75 1.25"
          stroke="#313131"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>{{ $t("back_to_home") }}</span></NuxtLink
    >
    <h1 class="main-title">{{ $t("Verify_code") }} ?</h1>
    <p class="mb-4">
      {{ $t("An_authentication_code_has_been_sent_to_your_code") }}.
    </p>
    <div class="input-wrapper">
      <label class="input-label" for="code">{{ $t("code") }}</label>
      <input
        class="input"
        type="text"
        inputmode="numeric"
        id="code"
        v-model="code"
        placeholder="Enter your code"
      />
    </div>
    <div class="sign-up-link-wrapper">
      <p class="sign-up-info">
        {{ $t("Didnt_receive_a_code") }}
        <NuxtLink to="/register" class="sign-up-link">
          {{ $t("resend") }}
        </NuxtLink>
      </p>
    </div>
    <div class="login-button-wrapper mb-6 mt-6">
      <button class="primary-button" aria-label="submit">
        {{ $t("submit") }}
      </button>
    </div>
  </div>
</template>

<style scoped></style>
