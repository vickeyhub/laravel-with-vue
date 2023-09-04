<template>
    <v-app>
        <v-app-bar color="indigo">
            <template v-slot:prepend>
                <v-app-bar-nav-icon size="45px"><v-icon>mdi-menu</v-icon></v-app-bar-nav-icon>
            </template>
            <v-app-bar-title>Admin Panel</v-app-bar-title>
            <template v-slot:append>
                <v-btn icon="mdi-magnify"></v-btn>
                <v-btn icon="mdi-dots-vertical"></v-btn>
            </template>
        </v-app-bar>
    </v-app>
  </template>
<script>
import { useHead } from "@vueuse/head";
export default {
    setup() {
        useHead({
            // Can be static or computed
            title: 'Home',
            meta: [
                {
                    name: `description`,
                    content: `Home Page description`,
                },
            ],
        });
    },
};
</script>