<template>
  <div id="app" class="bg-gray-200 h-screen">
    <navigator />
    <router-view />
  </div>
</template>

<script>
import Navigator from "./components/Navigator";
export default {
  name: "App",
  components: { Navigator },
};
</script>

<style>
@import "assets/css/admin-app.css";
</style>
