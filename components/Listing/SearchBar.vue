<script setup lang="ts">
import Popover from "primevue/popover";
</script>

<template>
  <section class="search-bar">
    <div class="search-title">
      <h1 class="title">Pastry Shops :</h1>
      <span>120 results</span>
    </div>
    <div class="actions">
      <div class="dropdown">
        <button type="button" class="dropdown-button">
          {{ $t("category") }}
          <span>
            <IconsArrowDown />
          </span>
        </button>
        <GlobalDropdown />
      </div>
      <div class="dropdown">
        <button type="button" class="dropdown-button">
          {{ $t("sort") }}
          <span>
            <IconsSort />
          </span>
        </button>
        <GlobalDropdown />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
