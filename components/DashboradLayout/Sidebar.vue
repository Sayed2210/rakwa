<script setup lang="ts">

</script>

<template>
  <aside class="sidebar flex flex-col gap-2 p-2">
    <div class="logo">
      <img src="~/public/favicon.ico" alt="logo">
    </div>
    <div class="routes flex flex-col gap-2">
      <details>
        <summary>Users</summary>
        <ul>
          <li>
            <NuxtLink to="/dashboard/users" class="flex items-center gap-2">
              user
            </NuxtLink>
          </li><li>
            <NuxtLink to="/dashboard/users" class="flex items-center gap-2">
              admin
            </NuxtLink>
          </li><li>
            <NuxtLink to="/dashboard/users" class="flex items-center gap-2">
              hi
            </NuxtLink>
          </li>
        </ul>
      </details>


    </div>


  </aside>


</template>

<style scoped>

</style>