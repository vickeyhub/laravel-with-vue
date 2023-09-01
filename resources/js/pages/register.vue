<template>
    <div>
        <h1>Register page</h1>
    </div>
</template>
<script>
import { useHead } from "@vueuse/head";
export default {
    setup() {
        useHead({
            // Can be static or computed
            title: 'Register',
            meta: [
                {
                    name: `description`,
                    content: `Registration description`,
                },
            ],
        });
    },
};
</script>