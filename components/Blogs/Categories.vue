<script setup lang="ts"></script>

<template>
  <section class="blogs-categories">
    <h2 class="categories-title">
      {{ $t("categories") }}
    </h2>
    <ul class="categories-list">
      <li class="category-item">
        <NuxtLink to="/blogs/1">
          {{ $t("Commercial") }}
          <span>15</span>
        </NuxtLink>
      </li>
      <li class="category-item">
        <NuxtLink to="/blogs/1">
          {{ $t("Commercial") }}
          <span>15</span>
        </NuxtLink>
      </li>
      <li class="category-item">
        <NuxtLink to="/blogs/1">
          {{ $t("Commercial") }}
          <span>15</span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
