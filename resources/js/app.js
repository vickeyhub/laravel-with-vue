import './bootstrap';

import { createApp } from 'vue';
import router from './router';

import app from './App.vue';

import { createHead } from '@vueuse/head'

const head = createHead()

createApp(app)
.use(head)
.use(router)
.mount("#app");