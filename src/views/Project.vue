<template>
    <div>
        <h1>{{ project.name }}</h1>
        <a :href="project.link">code</a>
        <h3>What it is</h3>
        <p>{{ project.whatItIs }}</p>
        <h3>Features</h3>
        <ul>
            <li v-for="item in project.functionality" :key="item.id">{{ item }}</li>
        </ul>
        <h3>How it was built</h3>
        <p>{{ project.howItWasBuilt }}</p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            project: {}
        }
    },
    created() {
        let name = this.$route.params.projectName;
        this.project = this.$store.state.projects.find( 
            (project) => {
                return project.name === name;
            });
    }
}
</script>

<style>

</style>