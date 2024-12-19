<script setup lang="ts">
import type MyReviewModel from "~/features/FetchReviewsFeature/Data/models/my_review_model";
import DeleteReviewsController from "~/features/DeleteReviewFeature/presentation/controllers/delete_review_controller";
import DeleteReviewParams from "~/features/DeleteReviewFeature/Core/Params/delete_review_params";

const user = useUserStore();
const props = defineProps<{
  reviews: MyReviewModel[] | [];
}>();

const deleteReviewsController = DeleteReviewsController.getInstance();

const deleteReview = async (review: MyReviewModel) => {
  await deleteReviewsController.deleteReview(new DeleteReviewParams(review.id));
};
</script>

<template>
  <div class="review-card" v-for="(review, index) in reviews" :key="index">
    <div class="img">
      <NuxtImg
        :src="user?.user?.image"
        alt="review image"
        class="review-img"
        format="webp"
      />
    </div>
    <div class="review-info">
      <h6 class="review-name">
        {{ $t("your_review_on") }}
        <NuxtLink :to="`/listing/${review.listing.id}`">{{
          review.listing.name
        }}</NuxtLink>
      </h6>
      <GlobalRate :rateCount="4" />
      <p class="review-date">{{ review.createdAt }}</p>
      <p class="review-description">
        {{ review.comment }}
      </p>
      <div class="actions">
        <button
          class="primary-button"
          type="button"
          @click="deleteReview(review)"
          aria-label="delete"
        >
          {{ $t("delete") }}
        </button>
        <button class="secondary-button" aria-label="edit">
          {{ $t("edit") }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
