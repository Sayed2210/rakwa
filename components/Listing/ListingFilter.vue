<script setup lang="ts">
import Slider from "primevue/slider";
import CategoryModel from "~/features/FetchCategoriesFeature/Data/models/category_model";
import FetchCategoriesController
  from "~/features/FetchCategoriesFeature/presentation/controllers/fetch_categories_controller";
import FetchCategoriesParams from "~/features/FetchCategoriesFeature/Core/Params/fetch_categories_params";
const value = ref(10);



</script>

<template>
  <aside class="listing-filter">
    <div class="flex gap-2 items-center">
      <IconsFilterSetting />
      <h2 class="filter-title">{{ $t("Filters") }}</h2>
    </div>
    <div class="applied-filter">
      <div class="flex items-center justify-between">
        <h3 class="filter-title">{{ $t("Applied_Filters") }}</h3>
        <button type="button" class="clear-filter">
          {{ $t("Clear_Filters") }}
        </button>
      </div>
      <div class="filtered-items">
        <span class="filtered-item">
          England
          <button class="remove" type="button" aria-label="remove">
            <IconsRemove />
          </button>
        </span>
        <span class="filtered-item">
          England
          <button class="remove" type="button" aria-label="remove">
            <IconsRemove />
          </button>
        </span>
        <span class="filtered-item">
          England
          <button class="remove" type="button" aria-label="remove">
            <IconsRemove />
          </button>
        </span>
        <span class="filtered-item">
          England
          <button class="remove" type="button" aria-label="remove">
            <IconsRemove />
          </button>
        </span>
      </div>
    </div>
    <div class="applied-filter">
      <div class="flex items-center justify-between">
        <h3 class="filter-title">{{ $t("Current_status") }}</h3>
      </div>
      <div class="filter-items">
        <span class="filter-item"> {{ $t("Open") }} </span>
        <span class="filter-item"> {{ $t("Close") }}</span>
      </div>
    </div>
    <div>
      <div class="flex items-center justify-between">
        <h3 class="filter-title">{{ $t("state") }}</h3>
      </div>
      <div class="filter-items">
        <span class="filter-item"> {{ $t("Scotland") }} </span>
        <span class="filter-item"> {{ $t("Wales") }}</span>
        <span class="filter-item"> {{ $t("Egypt") }}</span>
        <span class="filter-item"> {{ $t("USA") }}</span>
        <span class="filter-item"> {{ $t("Canda") }}</span>
      </div>
      <button type="button" class="clear-filter mt-4">
        {{ $t("show_all_states") }}
        <IconsShowAll />
      </button>
    </div>
    <div>
      <div class="flex items-center justify-between">
        <h3 class="filter-title">{{ $t("Rating") }}</h3>
      </div>
      <div class="filter-items">
        <span class="filter-item" >
          1
          <IconsStar />
        </span>
        <span class="filter-item"> 2 <IconsStar /> </span>
        <span class="filter-item"> 3 <IconsStar /> </span>
        <span class="filter-item"> 4 <IconsStar /> </span>
        <span class="filter-item"> 5 <IconsStar /> </span>
      </div>
    </div>
    <div class="range-filter">
      <div class="flex items-center justify-between">
        <h3 class="filter-title">{{ $t("distance_radius") }}</h3>
      </div>

      <div class="input-wrapper-switch">
        <div class="switch">
          <input type="checkbox" id="opening_price" />
          <label for="opening_price" class="slider"></label>
        </div>
      </div>
      <div class="range">
        <span>1 Km</span>
        <span>15 Km</span>
      </div>
      <div class="range-slider">
        <Slider v-model="value" :max="100" />
      </div>
    </div>
    <div class="range-filter">
      <div class="flex items-center justify-between">
        <h3 class="filter-title">{{ $t("price_range") }}</h3>
      </div>

      <div class="input-wrapper-switch">
        <div class="switch">
          <input type="checkbox" id="opening_price" />
          <label for="opening_price" class="slider"></label>
        </div>
      </div>
      <div class="range">
        <span>1 Km</span>
        <span>15 Km</span>
      </div>
      <div class="range-slider">
        <Slider v-model="value" :max="100" />
      </div>
    </div>
    <div>
      <div class="flex items-center justify-between">
        <h3 class="filter-title">{{ $t("On Map") }}</h3>
      </div>
      <div class="filter-items">
        <div class="input-wrapper">
          <label class="input-label" for="category">
            {{ $t("address") }}
          </label>
          <input
            type="text"
            class="input"
            id="category"
            :placeholder="$t('enter_address')"
          />
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped></style>
