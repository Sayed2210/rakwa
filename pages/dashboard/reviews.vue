<script setup lang="ts">
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
</script>

<template>
  <!--  <ReviewsNoReviews />-->
  <div class="tabs">
    <button
      type="button"
      aria-label="my_reviews"
      :class="[toggle ? 'active' : '', 'tab']"
      @click="toggle = true"
    >
      {{ $t("my_reviews") }}
    </button>
    <button
      type="button"
      aria-label="other_reviews"
      :class="[!toggle ? 'active' : '', 'tab']"
      @click="toggle = false"
    >
      {{ $t("other_reviews") }}
    </button>
  </div>
  <section class="reviews-section mt-12">
    <ReviewsMyReviewCard v-if="toggle" />
    <ReviewsOtherReviewCard v-else />
  </section>
</template>

<style scoped></style>
