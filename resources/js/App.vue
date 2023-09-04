<template>
    <div>
        <router-view></router-view>
    </div>
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
