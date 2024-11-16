<script setup lang="ts"></script>

<template>
  <header class="header">
    <nav class="container mx-auto px-8">
      <div class="nav-wrapper flex items-center justify-between">
        <NuxtLink to="/" class="logo">
          <NuxtImg src="/logo.png" alt="logo" class="logo-img" format="webp" />
        </NuxtLink>
        <div class="links">
          <NuxtLink class="link" to="/">Home</NuxtLink>
          <NuxtLink class="link" to="/about">About Us</NuxtLink>
          <NuxtLink class="link" to="/contact">Blog</NuxtLink>
          <div class="dropdown">
            <span class="dropdown-trigger"
              >{{ $t("categories") }}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_61_564)">
                  <path
                    d="M11.06 5.72656L8 8.7799L4.94 5.72656L4 6.66656L8 10.6666L12 6.66656L11.06 5.72656Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_61_564">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div class="dropdown-content">
              <ul class="flex flex-col gap-2">
                <li>
                  <NuxtLink to="/categories/1">{{ $t("category_1") }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/categories/2">{{ $t("category_2") }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/categories/3">{{ $t("category_3") }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/categories/3">{{ $t("category_3") }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/categories/3">{{ $t("category_3") }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="user">
          <!--     <div class="not-auth">-->
          <!--        <NuxtLink to="/auth/login" class="login-link">-->
          <!--        {{ $t("login") }}-->
          <!--      </NuxtLink>-->
          <!--      <span>/</span>-->
          <!--     <NuxtLink to="/auth/register" class="register-link">-->
          <!--    {{ $t("register") }}-->
          <!--  </NuxtLink>-->
          <!-- <NuxtImg src="/user.png" alt="user" format="webp" />-->
          <!--</div>-->
          <div class="auth">
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.03585 0.38765L3.97785 3.44465L0.920847 0.38765C0.873035 0.334 0.814775 0.290675 0.749635 0.260328C0.684494 0.22998 0.613844 0.21325 0.542012 0.211161C0.47018 0.209072 0.398677 0.221668 0.331883 0.248178C0.265089 0.274688 0.204409 0.314554 0.153561 0.365335C0.102712 0.416115 0.0627646 0.476741 0.0361648 0.5435C0.00956488 0.610258 -0.0031271 0.681744 -0.0011344 0.753579C0.000858307 0.825414 0.0174942 0.896086 0.0477543 0.961268C0.0780144 1.02645 0.121261 1.08477 0.174847 1.13265L3.23585 4.19065C3.33383 4.28877 3.4502 4.3666 3.57829 4.41971C3.70638 4.47282 3.84368 4.50016 3.98235 4.50016C4.12101 4.50016 4.25831 4.47282 4.38641 4.41971C4.5145 4.3666 4.63086 4.28877 4.72885 4.19065L7.78085 1.13265C7.86889 1.03182 7.91535 0.90131 7.91083 0.767525C7.90631 0.63374 7.85114 0.506666 7.75648 0.412012C7.66183 0.317357 7.53476 0.262188 7.40097 0.257666C7.26719 0.253143 7.13668 0.299604 7.03585 0.38765Z"
                fill="black"
              />
            </svg>
            <div class="info">
              <span class="name">Elsayed</span>
              <span class="role">Admin</span>
            </div>
            <NuxtImg src="/user-photo.png" alt="user" class="user-photo" />
            <div class="dropdown-content">
              <ul>
                <li class="dropdown-item">
                  <NuxtLink to="/dashboard/profile">
                    <span>{{ $t("profile_settings") }}</span
                    ><NuxtImg
                      src="/setting.png"
                      alt="profile settings"
                      format="webp"
                    />
                  </NuxtLink>
                </li>
                <li class="dropdown-item">
                  <NuxtLink to="/add-listing">
                    <span>{{ $t("add_listing") }}</span
                    ><NuxtImg
                      src="/add.png"
                      alt="add listing settings"
                      format="webp"
                    />
                  </NuxtLink>
                </li>
                <li class="dropdown-item">
                  <NuxtLink to="/bookings">
                    <span>{{ $t("my_bookings") }}</span
                    ><NuxtImg src="/task.png" alt="my bookings" format="webp" />
                  </NuxtLink>
                </li>
                <li class="dropdown-item">
                  <NuxtLink to="/my-listings">
                    <span>{{ $t("my_listing") }}</span>
                    <NuxtImg
                      src="/my-listing.png"
                      alt="my listing"
                      format="webp"
                    />
                  </NuxtLink>
                </li>
                <li class="dropdown-item">
                  <NuxtLink to="/messages">
                    <span>{{ $t("messages") }}</span>
                    <NuxtImg
                      src="/messages.png"
                      alt="my messages"
                      format="webp"
                    />
                  </NuxtLink>
                </li>
                <li class="dropdown-item">
                  <NuxtLink to="/bookmarks">
                    <span>{{ $t("bookmarks") }}</span>
                    <NuxtImg
                      src="/heart.svg"
                      alt="my bookmarks"
                      format="webp"
                    />
                  </NuxtLink>
                </li>
                <li class="dropdown-item">
                  <NuxtLink to="/reviews">
                    <span>{{ $t("reviews") }}</span>
                    <NuxtImg src="/like.png" alt="my bookmarks" format="webp" />
                  </NuxtLink>
                </li>
                <li class="dropdown-item">
                  <NuxtLink to="/booking">
                    <span>{{ $t("booking") }}</span>
                    <NuxtImg
                      src="/stickynote.png"
                      alt="my booking"
                      format="webp"
                    />
                  </NuxtLink>
                </li>
                <li class="dropdown-item">
                  <NuxtLink to="/logout">
                    <span>{{ $t("logout") }}</span>
                    <NuxtImg src="/login.svg" alt="logout" format="webp" />
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
