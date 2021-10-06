<template>
    <div id="nav-container">
        <div id="name-container">
            <router-link :to="{name: 'Home'}" exact id="name">Nolan Carbin</router-link>
        </div>
        <div id="links-container">
            <router-link :to="{name: 'Projects'}" exact class="link">Projects</router-link>
            <router-link :to="{name: 'Contact'}" exact class="link">Contact</router-link>
            <div id="icon-container">
                <a :href="$store.state.linkedInLink" target="_blank">
                    <font-awesome-icon id="linkedin-icon" :icon="['fab', 'linkedin']" size="2x"/>
                </a>
                <a :href="$store.state.githubLink" target="_blank">
                    <font-awesome-icon id="github-icon" :icon="['fab', 'github-square']" size="2x"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    
    #nav-container {
        background-color: var(--light-color2);
        color: red;
        width: 100%;
        height: 100px;
        position: fixed;
        top: 0;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        align-content: flex-end;
    }

    #name-container {
        margin-left: 8rem;
    }

    #name {
        font-size: 2rem;
        text-decoration: none;
        color: var(--main-color);
    }

    #name:hover {
        color: var(--secondary-color);
        text-decoration: underline;
    }

    #links-container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 35%;
        margin-left: 4rem;
    }

    .link {
        text-decoration: none;
        font-size: 1.3rem;
        color: var(--main-color);
    }

    .link:hover {
        color: var(--secondary-color);
        text-decoration: underline;
    }

    #icon-container {

    }

    #linkedin-icon {
        color: var(--main-color);;
    }

    #linkedin-icon:hover {
        color: var(--secondary-color);
    }

    #github-icon {
        color: var(--main-color);
        margin-left: 25px;
    }

    #github-icon:hover {
        color: var(--secondary-color);
    }


    @media screen and (max-width: 868px) {
        #icon-container {
            display: none;
        }
    }

    @media screen and (max-width: 648px) {
        #nav-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
        }

        #name-container {
            margin-left: 0rem;
        }

        #links-container {
            margin-left: 0rem;
            margin-top: 0.5rem;
            width: 40%;
        }
    }


</style>