<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-1 gap-4 mt-12">
    <div class="col-span-1">
      <div class="input-wrapper">
        <label class="input-label" for="current_password">{{
          $t("current_password")
        }}</label>
        <input
          class="input"
          type="password"
          id="current_password"
          placeholder="Enter your Current password"
        />
      </div>
    </div>
    <div class="col-span-1">
      <div class="input-wrapper">
        <label class="input-label" for="new_password">{{
          $t("new_password")
        }}</label>
        <input
          class="input"
          type="password"
          id="new_password"
          placeholder="Enter your new password"
        />
      </div>
    </div>
    <div class="col-span-1">
      <div class="input-wrapper">
        <label class="input-label" for="new_password_confirm">{{
          $t("new_password_confirmation")
        }}</label>
        <input
          class="input"
          type="password"
          id="new_password_confirm"
          placeholder="Enter your new password confirmation"
        />
      </div>
    </div>
    <div class="col-span-1">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          class="primary-button-2 col-span-1 md:col-span-2"
          aria-label="submit"
          type="submit"
        >
          {{ $t("save") }}
        </button>
        <button
          class="secondary-button col-span-1"
          aria-label="cancel"
          type="button"
        >
          {{ $t("cancel") }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
