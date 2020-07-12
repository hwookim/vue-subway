<template>
  <div
    id="app"
    class="bg-gray-200 h-screen"
    :class="{ 'modal-active': isModalActive }"
  >
    <navigator />
    <router-view />
  </div>
</template>

<script>
import Navigator from "./components/Navigator";
export default {
  name: "App",
  components: { Navigator },
  computed: {
    isModalActive() {
      return this.$store.state.isModalActive;
    },
  },
};
</script>

<style>
@import "assets/css/admin-app.css";
</style>
