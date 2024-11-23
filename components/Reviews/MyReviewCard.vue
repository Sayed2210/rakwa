<script setup lang="ts"></script>

<template>
  <div class="review-card">
    <div class="img">
      <NuxtImg
        src="/review.png"
        alt="review image"
        class="review-img"
        format="webp"
      />
    </div>
    <div class="review-info">
      <h6 class="review-name">
        {{ $t("your_review_on") }} <NuxtLink to="/profile">profile</NuxtLink>
      </h6>
      <GlobalRate :rateCount="4" />
      <p class="review-date">November 7, 2024</p>
      <p class="review-description">
        Chicago's next public school budget will depend on $500 million in
        retirement savings that have not yet been approved by Illinois, school
        officials said Monday.
      </p>
      <div class="actions">
        <button class="primary-button" aria-label="delete">
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
