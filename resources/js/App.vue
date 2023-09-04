<template>
    <v-app>
        <div>
            <router-link to="/">Home</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/register">Register</router-link>
        </div>

        <router-view></router-view>
    </v-app>
</template>
<script>
import { useHead } from "@vueuse/head";
export default {
    setup() {
        useHead({
            // Can be static or computed
            title: 'static title',
            meta: [
                {
                    name: `description`,
                    content: `static description`,
                },
            ],
        });
    },
};
</script>
