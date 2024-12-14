<script setup lang="ts">
const visible = ref<boolean>(false);
</script>

<template>
  <button type="button" class="primary-button" @click="visible = true">
    <IconsAddRate />
    {{ $t("add_rate") }}
  </button>

  <Dialog
    class="add-rating-dialog"
    v-model:visible="visible"
    :header="$t('add_rate')"
    modal
  >
    <h4>
      Take control of your listing!
    </h4>
    <p>
      Customize your listing details, reply to reviews, upload photos and more to show customers what makes your business special.
    </p>
    <div class="input-wrapper">
      <label class="input-label" for="name">{{ $t("name") }}</label>
      <input
        class="input"
        placeholder="Enter your name"
        type="text"
        name="name"
        id="name"
      />
    </div>

    <div class="input-wrapper">
      <label class="input-label" for="email">{{ $t("email") }}</label>
      <input
        class="input"
        placeholder="Enter your email"
        type="email"
        name="email"
        id="email"
      />
    </div>

    <div class="input-wrapper">
      <label class="input-label" for="note">{{ $t("note") }}</label>
      <textarea
        class="input"
        placeholder="Enter your password"
        id="note"
      />
    </div>
    <ListingGallary />
    <button type="button" class="primary-button-2">
      {{ $t("claim_now") }}
    </button>
  </Dialog>
</template>

<style scoped></style>
