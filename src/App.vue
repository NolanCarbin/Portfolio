<template>
  <div>
    <nav-bar id="nav"></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar.vue"

export default {
  components: {
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,300&display=swap');

  * {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }
  #nav {
    background-color: lavender;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
