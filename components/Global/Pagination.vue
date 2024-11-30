<script setup lang="ts"></script>

<template>
  <div class="pagination">
    <span class="arrow">
      <IconsArrowLeft />
    </span>
    <span class="page" v-for="i in 3" :key="i"> {{ i + 1 }} </span>
    <span class="arrow">
      <IconsArrowRight />
    </span>
  </div>
</template>

<style scoped></style>
