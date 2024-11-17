<script setup lang="ts">
const image = ref<File | null>(null);
const handle= ()=> {
  console.log("asd")
}
</script>

<template>
  <div class="listing-section">
    <h2 class="listing-section-title">
      {{ $t("basic_information") }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="col-span-1 md:col-span-2">
        <GlobalUploadImage @update:image="(file) => (file = image)" />
      </div>
      <div class="col-span-1 md:col-span-1">
        <div class="input-wrapper">
          <label class="input-label" for="listing_title">
            {{ $t("listing_title") }}
          </label>
          <input type="text" class="input" :placeholder="$t('listing_title')" />
        </div>
      </div>
      <div class="col-span-1 md:col-span-1">
        <div class="input-wrapper">
          <label class="input-label" for="keywords">
            {{ $t("keywords") }}
            <span class="tooltip">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                  stroke="#E80306"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 6V9.75"
                  stroke="#E80306"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.99609 12H9.00283"
                  stroke="#E80306"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="tooltip-text" @click="handle">
                {{ $t("keywords_description") }}
              </span>
            </span>
          </label>
          <input type="text" class="input" :placeholder="$t('keywords')" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
