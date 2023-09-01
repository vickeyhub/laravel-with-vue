<template>
    <div>
        <h1>Login page</h1>
    </div>
</template>
<script>
import { useHead } from "@vueuse/head";
export default {
    setup() {
        useHead({
            // Can be static or computed
            title: 'Login',
            meta: [
                {
                    name: `description`,
                    content: `Login description`,
                },
            ],
        });
    },
};
</script>