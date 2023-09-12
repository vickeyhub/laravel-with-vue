<template>
    <v-app>
        <Header/>
        <v-main style="height: 500px">
            <v-card-text>
                The navigation drawer will appear from the bottom on smaller
                size screens.
            </v-card-text>
        </v-main>
    </v-app>
</template>
<script>
import { useHead } from "@vueuse/head";
import Header from '../components/Header.vue';
export default {
    setup() {
        useHead({
            // Can be static or computed
            title: "Home",
            meta: [
                {
                    name: `description`,
                    content: `Home Page description`,
                },
            ],
        });
    },
    components: {
        Header
    },
};
</script>
