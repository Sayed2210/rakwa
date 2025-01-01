<script setup lang="ts">
import type ReviewModel from "~/features/ListingFeature/Data/models/review_model";

const props = defineProps<{ rate: number , myReviews: ReviewModel[] }>();
const user = useUserStore();
</script>

<template>
  <section class="listing-reviews">
    <h3>{{ $t("reviews") }}</h3>
    <div class="rating">
      <div class="add-rate" v-if="!myReviews.length">
        <h4 >{{ $t("Add_your_rating") }}</h4>
        <ListingDetailsAddRateDialog v-if="user.isAuth && !myReviews.length" />
      </div>
      <div class="rates">
        <div class="rate-count">
          <span class="rate-number">{{ rate.toFixed(2) }}</span>
          <GlobalRate :rateCount="rate.toFixed()!" />
          <span class="rate-description">
            {{ $t("We_have") }} 232 {{ $t("reviews_from_our_customers") }}
          </span>
        </div>
        <div class="rate-img">
          <NuxtImg src="/listing-rate.png" alt="rate" format="webp" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
