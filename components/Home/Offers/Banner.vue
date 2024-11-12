<script setup lang="ts"></script>

<template>
  <section class="offer-banner">
    <h4>{{ $t("Exclusive_Deals_Offers") }}</h4>
    <h5>
      {{
        $t(
          "Explore_a_curated_collection_of_today_top_ads_featuring_limited_time_deals_exclusive_products_and_unbeatable_discounts_across_a_wide_range_of_categories",
        )
      }}
    </h5>
    <NuxtLink class="start-now" to="/categories/1">{{ $t("start_now") }}</NuxtLink>
  </section>
</template>

<style scoped></style>
