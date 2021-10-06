<template>
    <div>
        <router-link :to="{name: 'Home'}" exact>Home</router-link>
        <router-link :to="{name: 'Projects'}" exact>Projects</router-link>
        <router-link :to="{name: 'Contact'}" exact>Contact</router-link>
        <a :href="$store.state.linkedInLink">
            <font-awesome-icon id="linkedin-icon" :icon="['fab', 'linkedin']" size="2x"/>
        </a>
        <a :href="$store.state.githubLink">
            <font-awesome-icon id="github-icon" :icon="['fab', 'github-square']" size="2x"/>
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    #linkedin-icon {
        color: black;
    }

    #linkedin-icon:hover {
        color: white;
    }

    #github-icon {
        color: black;
    }

    #github-icon:hover {
        color: white;
    }


</style>