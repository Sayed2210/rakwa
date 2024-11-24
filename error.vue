<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <NuxtLayout name="default">
    <div class="not-found">
      <h1 class="not-found-title">error 404 !!</h1>
      <NuxtImg
        src="/network-error.png"
        alt="network error"
        format="webp"
        class="not-found-img"
      />
      <p class="not-found-description">
        {{
          $t(
            "The_page_doesnt_exist_The_page_you_are_looking_for_has_been_moved_and_removed_It_was_renamed_or_maybe_it_didn_exist_at_all",
          )
        }}
      </p>
      <NuxtLink to="/" class="secondary-button">
        {{ $t("back_to_home") }}
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
