<script setup lang="ts">
import FetchMyReviewsController from "~/features/FetchReviewsFeature/presentation/controllers/fetch_my_reviews_controller";
import FetchMyReviewParams from "~/features/FetchReviewsFeature/Core/Params/fetch_my_reviews_params";
import FetchOtherReviewsController from "~/features/FetchReviewsFeature/presentation/controllers/fetch_other_review_controller";
import FetchOtherReviewParams from "~/features/FetchReviewsFeature/Core/Params/fetch_other_reviews_params";

definePageMeta({
  layout: "dashboard",
});

useSeoMeta({
  title: "Reviews",
  ogTitle: "Reviews",
  description: "Reviews",
  ogDescription: "Reviews",
});
const toggle = ref<boolean>(true);
const fetchMyReviewsController = FetchMyReviewsController.getInstance();
const fetchOtherReviewsController = FetchOtherReviewsController.getInstance();

const state = ref(fetchMyReviewsController.state.value);
const otherState = ref(fetchOtherReviewsController.state.value);

const fetchMyReviews = async () => {
  await fetchMyReviewsController.fetchMyReviews(new FetchMyReviewParams(1, 10));
};
onMounted(async () => {
  await fetchMyReviews();
});

const fetchOtherReviews = async () => {
  await fetchOtherReviewsController.fetchOtherReviews(
    new FetchOtherReviewParams(true, 1, 10),
  );
};

watch(
  () => fetchMyReviewsController.state.value,
  (newVal, oldVal) => {
    console.log("State changed:", newVal);
    state.value = newVal;
  },
  { deep: true },
);

watch(
  () => fetchOtherReviewsController.state.value,
  (newVal, oldVal) => {
    // console.log("State changed:", newVal);
    otherState.value = newVal;
  },
  { deep: true },
);

const toggleReviews = (toggleReview: boolean) => {
  if (toggleReview) {
    fetchMyReviews();
    toggle.value = true;
  } else {
    fetchOtherReviews();
    toggle.value = false;
  }
};
</script>

<template>
  <!--  <ReviewsNoReviews />-->
  <div class="tabs">
    <button
      type="button"
      aria-label="my_reviews"
      :class="[toggle ? 'active' : '', 'tab']"
      @click="toggleReviews(true)"
    >
      {{ $t("my_reviews") }}
    </button>
    <button
      type="button"
      aria-label="other_reviews"
      :class="[!toggle ? 'active' : '', 'tab']"
      @click="toggleReviews(false)"
    >
      {{ $t("other_reviews") }}
    </button>
  </div>

  <section class="reviews-section mt-12">
    <GlobalDataStatues v-if="toggle" :status="state">
      <template #empty>
        <ReviewsNoReviews />
      </template>
      <template #failed>
        <ReviewsNoReviews />
      </template>
      <template #loader>
        <ReviewsMyReviewLoaderCard v-for="i in 3" :key="i" />
      </template>
      <template #initial>
        <ReviewsMyReviewLoaderCard v-for="i in 3" :key="i" />
      </template>
      <template #success>
        <div class="flex flex-col gap-4">
          <ReviewsMyReviewCard :reviews="state.data" />
        </div>
      </template>
    </GlobalDataStatues>

    <GlobalDataStatues v-else :status="otherState">
      <template #empty>
        <ReviewsNoReviews />
      </template>
      <template #failed>
        <ReviewsNoReviews />
      </template>
      <template #loader>
        <ReviewsMyReviewLoaderCard v-for="i in 3" :key="i" />
      </template>
      <template #initial>
        <ReviewsMyReviewLoaderCard v-for="i in 3" :key="i" />
      </template>
      <template #success>
        <div class="flex flex-col gap-4">
          <ReviewsOtherReviewCard :reviews="otherState.data" />
        </div>
      </template>
    </GlobalDataStatues>
  </section>
</template>

<style scoped></style>
