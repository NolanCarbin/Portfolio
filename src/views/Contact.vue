<template>
  <div>
    <h1>Get In Touch!</h1> 
    <h2>Intrested in working with me?</h2>
    <h3><a :href="$store.state.resumeLink" target="_blank">View Resume</a></h3>
    <h3>Email: <a :href="$store.state.email">nolan2556@gmail.com</a></h3>
    <h3>LinkedIn: <a :href="$store.state.linkedInLink" target="_blank">NolanCarbin</a></h3>
    <h3>GitHub: <a :href="$store.state.githubLink" target="_blank">NolanCarbin</a></h3>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>