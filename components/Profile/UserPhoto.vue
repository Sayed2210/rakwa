<script setup lang="ts"></script>

<template>
  <div class="user-photo">
    <div class="img">
      <NuxtImg
        src="/user-photo-2.png"
        alt="user"
        class="user img"
        format="webp"
      />
    </div>
    <div class="upload">
      <div class="actions">
        <button class="primary-button-2" aria-label="submit">
          {{ $t("add_photo") }}
        </button>
        <button class="secondary-button" aria-label="submit">
          {{ $t("remove_photo") }}
        </button>
      </div>
      <p>{{$t("Attach_photo_not_exceeding_3_5_MB")}}</p>
    </div>
  </div>
</template>

<style scoped></style>
