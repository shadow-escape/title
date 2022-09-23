import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faArrowUpRightFromSquare,
    faStarOfLife,
    faLocationPin,
    faDungeon,
    faCalendarDays,
    faStar,
    faLayerGroup,
    faTrophy,
    faQuestion,
    faUserTie,
    faListCheck,
    faCopy
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
    faArrowUpRightFromSquare,
    faStarOfLife,
    faLocationPin,
    faDungeon,
    faCalendarDays,
    faStar,
    faLayerGroup,
    faTrophy,
    faQuestion,
    faUserTie,
    faListCheck,
    faCopy,
);

import './assets/styles/style.scss';

createApp(App)
    .use(store)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');