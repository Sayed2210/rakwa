<script setup lang="ts"></script>

<template>
  <section class="comment-wrapper">
    <h2 class="comment-title">
      {{ $t("comments") }}
    </h2>
    <h3 class="comment-count">
      <span>20</span>
      {{ $t("comments") }}
    </h3>
    <div class="comments">
      <div class="client-img">
        <NuxtImg
          src="team-member.png"
          alt="client"
          class="client-opinion-card-img"
          format="webp"
        />
      </div>
      <div class="comment-content">
        <h4 class="user-name">Elsayed Hassan</h4>

        <p class="comment-text">
          Quisque nec non amet quis. Varius tellus justo odio parturient mauris
          curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id
          sed faucibus bibendum augue id cras purus. At eget euismod cursus non.
          Molestie dignissim sed volutpat feugiat vel.
        </p>
        <div class="replay">
          <IconsReplay />
          <span>Reply</span>
        </div>
        <div class="replays">
          <div class="comments">
            <div class="client-img">
              <NuxtImg
                src="team-member.png"
                alt="client"
                class="client-opinion-card-img"
                format="webp"
              />
            </div>
            <div class="comment-content">
              <h4 class="user-name">Elsayed Hassan</h4>

              <p class="comment-text">
                Quisque nec non amet quis. Varius tellus justo odio parturient
                mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend
                luctus ut. Id sed faucibus bibendum augue id cras purus. At eget
                euismod cursus non. Molestie dignissim sed volutpat feugiat vel.
              </p>
              <div class="replay">
                <IconsReplay />
                <span>Reply</span>
              </div>
              <div class="replays"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GlobalPagination />
  </section>
</template>

<style scoped></style>
