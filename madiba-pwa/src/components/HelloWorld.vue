<template>
  <h1 class="m-2 text-red-700"> hello world </h1>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
      msg: String,
  },
})
export default class NavBar extends Vue {
  msg!: string;
}
</script>

 