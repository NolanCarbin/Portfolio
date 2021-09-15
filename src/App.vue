<template>
  <div>
    <nav>
      <router-link :to="{name: 'Home'}" exact>Home</router-link>
      <router-link :to="{name: 'Projects'}">Projects</router-link>
      <router-link :to="{name: 'Contact'}">Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
