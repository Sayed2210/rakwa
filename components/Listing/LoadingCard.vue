<script setup lang="ts">
import Skeleton from "primevue/skeleton";
</script>

<template>
  <div class="listing-card">
    <div class="listing-img">
      <Skeleton width="100%" height="200px" />
    </div>
    <div class="listing-info w-full">
      <div class="listing-header">
        <Skeleton width="20%" height="40px" />
      </div>
      <Skeleton width="50%" height="20px" />
      <Skeleton width="80%" height="20px" />
      <Skeleton width="80%" height="20px" />
    </div>
  </div>
</template>

<style scoped></style>
