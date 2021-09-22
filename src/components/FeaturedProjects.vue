<template>
  <div>
      <h2>Featured Projects</h2>
      <div id="projects-container">
          <div v-for="project in featuredProjects" :key="project.name">
              <router-link :to="{name: 'Project', params: {projectName: project.name}}">
                <h2>{{ project.name }}</h2>
              </router-link>
              <p>{{project.shortBio}}</p>
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

#projects-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {

    #projects-container {
        grid-template-columns: 1fr;
        
    }
}

</style>