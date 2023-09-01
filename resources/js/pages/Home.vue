<template>
    <div>
        <h1>Home page</h1>
    </div>
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