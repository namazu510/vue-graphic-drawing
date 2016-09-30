import Vue = require('vue');
import VueRouter = require('vue-router');
import { configureRouter } from './route-config';
import {App} from './app';

Vue.use(VueRouter);

const router = new VueRouter<App>();
configureRouter(router);

router.start(App, '#app');

export default router;
