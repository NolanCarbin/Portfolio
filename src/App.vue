<template>
  <div>
    <nav-bar></nav-bar>
    <div id="body">
      <router-view></router-view>
    </div>
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

  #body {
    margin-top: 130px;
  }

  :root {
    --main-color: #0b2545;
    --secondary-color: #134074;
    --light-color: #8da9c4;
    --light-color2: #eef4ed;

  }

</style>
