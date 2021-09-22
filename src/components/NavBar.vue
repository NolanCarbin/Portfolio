<template>
    <div>
        <router-link :to="{name: 'Home'}" exact>Home</router-link>
        <router-link :to="{name: 'Projects'}" exact>Projects</router-link>
        <router-link :to="{name: 'Contact'}" exact>Contact</router-link>
        <a :href="$store.state.linkedInLink">LI</a>
        <a :href="$store.state.githubLink">GH</a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>