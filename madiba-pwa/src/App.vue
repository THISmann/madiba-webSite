<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <NavBar />
  <router-view/>
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue';
</script>

 
