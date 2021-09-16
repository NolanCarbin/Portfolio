<template>
  <div>
    <about></about>
    <featured-projects></featured-projects>
    <footer-contact></footer-contact>
  </div>
</template>

<script>

import About from "@/components/About.vue"
import FeaturedProjects from "@/components/FeaturedProjects.vue"
import FooterContact from "@/components/FooterContact.vue"

export default {
  name: 'Home',
  components: {
    About,
    FeaturedProjects,
    FooterContact
  }
}
</script>
