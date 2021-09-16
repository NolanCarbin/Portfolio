<template>
  <div>
      <h2>Featured Projects</h2>
      <div id="projects-container">
          <div v-for="project in featuredProjects" :key="project.name">
              <h2>{{ project.name }}</h2>
              <p>{{project.description}}</p>
              <a :href="project.link">Code</a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        featuredProjects() {
            return this.$store.state.projects.filter( (project) => {
                return project.isFeatured == true;
            });
        }
    }

}
</script>

<style scoped>

</style>