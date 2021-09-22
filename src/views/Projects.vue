<template>
  <div>
    <h1>Projects</h1>
    <div id="projects-container">
      <div v-for="project in $store.state.projects" :key="project.name">
        <router-link :to="{name: 'Project', params: {projectName: project.name}}">
          <h2>{{ project.name }}</h2>
          <p>{{ project.shortBio }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
