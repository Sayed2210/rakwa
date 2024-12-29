<script setup lang="ts">
import CategoryModel from "~/features/FetchCategoriesFeature/Data/models/category_model";
import FilterListingParamsBuilder from "~/features/ListingFeature/Presentation/Builder/filter_listing_builder";
import SearchListingController from "~/features/ListingFeature/Presentation/controllers/search_listing_controller";
import {FilterStrategy} from "~/features/ListingFeature/Presentation/strategies/filter_strategy";

const props = defineProps<{ categories: CategoryModel[] }>();


const searchListingController = SearchListingController.getInstance();
searchListingController.setStrategy(new FilterStrategy());

const filterListingParamsBuilder = FilterListingParamsBuilder.Instance;
const setCategory = async (id: number) => {
  filterListingParamsBuilder.setCategoryID(id);
  await searchListingController.executeStrategy(
      filterListingParamsBuilder.build(),
  );
};
</script>

<template>
  <div class="dropdown-content">
    <ul>
      <li
        class="dropdown-item"
        @click="setCategory(category.id)"
        v-for="category in categories"
      >
        {{ category.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
