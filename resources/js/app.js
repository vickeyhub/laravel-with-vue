import './bootstrap';

import { createApp } from 'vue';
import router from './router';

import app from './App.vue';
import { createHead } from '@vueuse/head'
const head = createHead()

// Vuetify
// import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives
})

createApp(app)
    .use(vuetify)
    .use(head)
    .use(router)
    .mount("#app");