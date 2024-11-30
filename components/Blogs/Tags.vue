<script setup lang="ts"></script>

<template>
  <section class="blogs-tags">
    <h2 class="blogs-tags-title">
      {{ $t("tags") }}
    </h2>
    <ul class="tags-list">
      <li class="tag-item">
        <NuxtLink to="/blogs/1">
          {{ $t("Commercial") }}
        </NuxtLink>
      </li>
      <li class="tag-item">
        <NuxtLink to="/blogs/1">
          {{ $t("LLM") }}
        </NuxtLink>
      </li>
      <li class="tag-item">
        <NuxtLink to="/blogs/1">
          {{ $t("Commercial") }}
        </NuxtLink>
      </li>
      <li class="tag-item">
        <NuxtLink to="/blogs/1">
          {{ $t("Idea") }}
        </NuxtLink>
      </li>
      <li class="tag-item">
        <NuxtLink to="/blogs/1">
          {{ $t("LearnPress") }}
        </NuxtLink>
      </li>
      <li class="tag-item">
        <NuxtLink to="/blogs/1">
          {{ $t("LearnPress") }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
