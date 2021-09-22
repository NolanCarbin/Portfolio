<template>
  <div>
    <about></about>
    <featured-projects></featured-projects>
  </div>
</template>

<script>

import About from "@/components/About.vue"
import FeaturedProjects from "@/components/FeaturedProjects.vue"
// import Footer from "@/components/Footer.vue"

export default {
  name: 'Home',
  components: {
    About,
    FeaturedProjects
  }
}
</script>
