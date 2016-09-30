import {App} from './app';
import {LorenzAttractor} from './components/chaos/lorenz-attractor/lorenz-attractor';
export function configureRouter(router: vuejs.Router<App>) {
    router.map({
        '/': {
            component: LorenzAttractor,
            name: 'lorenz-attractor'
        }
    });

}