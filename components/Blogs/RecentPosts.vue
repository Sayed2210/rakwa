<script setup lang="ts"></script>

<template>
  <section class="blogs-recent-posts">
    <h2 class="recent-posts-title">
      {{ $t("Recent_Posts") }}
    </h2>
    <ul class="recent-posts-list">
      <li class="recent-posts-item">
        <NuxtLink to="/blogs/1" class="recent-posts-item">
          <div class="post-img">
            <NuxtImg src="recent-post.png" alt="recent post" format="webp" />
          </div>
          <div class="post-info">
            <p class="post-date">November 7, 2024</p>
            <h3 class="post-title">
              Best LearnPress WordPress Theme Collection for 2023
            </h3>
          </div>
        </NuxtLink>
      </li><li class="recent-posts-item">
        <NuxtLink to="/blogs/1" class="recent-posts-item">
          <div class="post-img">
            <NuxtImg src="recent-post.png" alt="recent post" format="webp" />
          </div>
          <div class="post-info">
            <p class="post-date">November 7, 2024</p>
            <h3 class="post-title">
              Best LearnPress WordPress Theme Collection for 2023
            </h3>
          </div>
        </NuxtLink>
      </li><li class="recent-posts-item">
        <NuxtLink to="/blogs/1" class="recent-posts-item">
          <div class="post-img">
            <NuxtImg src="recent-post.png" alt="recent post" format="webp" />
          </div>
          <div class="post-info">
            <p class="post-date">November 7, 2024</p>
            <h3 class="post-title">
              Best LearnPress WordPress Theme Collection for 2023
            </h3>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
