<script setup lang="ts">
import OtherReviewModel from "~/features/FetchReviewsFeature/Data/models/other_review_model";

const props = defineProps<{
  reviews: OtherReviewModel[] | [];
}>();
</script>

<template>
  <div class="review-card" v-for="(review, index) in reviews" :key="index">
    <div class="img">
      <NuxtImg
        :src="review.client?.image"
        alt="review image"
        class="review-img"
        format="webp"
      />
    </div>
    <div class="review-info">
      <div class="flex gap-2 items-center">
        <h6 class="review-name">{{ review.client?.name }}</h6>
        <p class="review-date">{{ review.createdAt }}</p>
      </div>
      <GlobalRate :rateCount="4" />
      <span class="review-name">
        {{ $t("review_on") }}
        <NuxtLink :to="`/listing/${review.listing.id}`">{{
          review.listing.name
        }}</NuxtLink>
      </span>
      <p class="review-description">
        {{ review.comment }}
      </p>
      <div class="actions">
        <button class="primary-button" aria-label="delete">
          {{ $t("report") }}
        </button>
        <!--        <button class="secondary-button" aria-label="edit">-->
        <!--          {{ $t("edit") }}-->
        <!--        </button>-->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
