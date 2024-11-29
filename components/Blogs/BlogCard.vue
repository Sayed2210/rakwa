<script setup lang="ts"></script>

<template>
  <div class="blog-card">
    <div class="blog-img">
      <NuxtImg
        src="/blog-card.png"
        alt="blog img"
        class="blog-img"
        format="webp"
      />
    </div>
    <div class="blog-info">
      <div class="flex items-start gap-4">
        <span class="line"></span>
        <div class="info-wrapper">
          <div class="flex items-center gap-4">
            <h2 class="blog-category">consulting</h2>
            <span class="dot"></span>
            <span class="date">November 7, 2024</span>
          </div>
          <h3 class="blog-title">
            Our main goal is to "develop yourself as a leader"
          </h3>
          <p class="blog-description">
            Chicago's next public school budget will depend on $500 million in
            retirement savings that have not yet been approved by Illinois,
            school officials said Monday.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
