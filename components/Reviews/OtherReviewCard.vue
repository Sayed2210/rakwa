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
      <div class="flex gap-2 items-center">
        <h6 class="review-name">ELsayed Hassan</h6>
        <p class="review-date">November 7, 2024</p>
      </div>
      <GlobalRate :rateCount="4" />
      <span class="review-name">
        {{ $t("review_on") }} <NuxtLink to="/profile">profile</NuxtLink>
      </span>
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
