<script setup lang="ts">
import MultiSelect from "primevue/multiselect";
import Select from "primevue/select";

const selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

// const basicInformation = useBasicInformation();
const title = ref<string>("");
const keywords = ref<string>("");
const description = ref<string>("");
const categories = ref<number[]>([]);
const minimumPriceRange = ref<number>(0);
const maximumPriceRange = ref<number>(0);

const emit = defineEmits<{
  (e: "update:title", title: string): void;
  (e: "update:keywords", keywords: string): void;
  (e: "update:description", description: string): void;
  (e: "update:categories", categories: number[]): void;
  (e: "update:minimumPriceRange", minimumPriceRange: number): void;
  (e: "update:maximumPriceRange", maximumPriceRange: number): void;
}>();

watch(
  [
    title,
    keywords,
    description,
    categories,
    minimumPriceRange,
    maximumPriceRange,
  ],
  () => {
    emit("update:title", title.value);
    emit("update:keywords", keywords.value);
    emit("update:description", description.value);
    emit(
      "update:categories",
      categories.value.map((item) => item.id),
    );
    emit("update:minimumPriceRange", minimumPriceRange.value);
    emit("update:maximumPriceRange", maximumPriceRange.value);
  },
);
</script>

<template>
  <div class="col-span-1 md:col-span-1">
    <div class="input-wrapper">
      <label class="input-label" for="listing_title">
        {{ $t("listing_title") }}
      </label>
      <input
        type="text"
        class="input"
        v-model="title"
        :placeholder="$t('listing_title')"
      />
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
          <span class="tooltip-text">
            {{ $t("keywords_description") }}
          </span>
        </span>
      </label>
      <input
        type="text"
        class="input"
        v-model="keywords"
        :placeholder="$t('keywords')"
      />
    </div>
  </div>
  <div class="col-span-1 md:col-span-1">
    <div class="input-wrapper">
      <label class="input-label" for="category">
        {{ $t("category") }}
      </label>
      <MultiSelect
        v-model="categories"
        display="chip"
        :options="cities"
        optionLabel="name"
        filter
        placeholder="Select Cities"
        :maxSelectedLabels="3"
      />
    </div>
  </div>
  <div class="col-span-1 md:col-span-1">
    <div class="input-wrapper">
      <label class="input-label" for="listing_title">
        {{ $t("service_category") }}
      </label>
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Select a City"
      />
    </div>
  </div>
  <div class="col-span-1 md:col-span-1">
    <div class="input-wrapper">
      <label class="input-label" for="minimum_price_range">
        {{ $t("minimum_price_range") }}
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
          <span class="tooltip-text">
            {{ $t("keywords_description") }}
          </span>
        </span>
      </label>
      <input
        type="number"
        inputmode="numeric"
        class="input"
        min="0"
        v-model="minimumPriceRange"
        :placeholder="$t('minimum_price_range')"
      />
    </div>
  </div>
  <div class="col-span-1 md:col-span-1">
    <div class="input-wrapper">
      <label class="input-label" for="maximum_price_range">
        {{ $t("maximum_price_range") }}
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
          <span class="tooltip-text">
            {{ $t("keywords_description") }}
          </span>
        </span>
      </label>
      <input
        type="number"
        inputmode="numeric"
        class="input"
        min="0"
        v-model="maximumPriceRange"
        :placeholder="$t('maximum_price_range')"
      />
    </div>
  </div>
  <div class="col-span-1 md:col-span-2">
    <div class="input-wrapper">
      <label class="input-label" for="description">
        {{ $t("description") }}
      </label>
      <textarea
        class="input"
        v-model="description"
        :placeholder="$t('description')"
      />
    </div>
  </div>
</template>

<style scoped></style>
