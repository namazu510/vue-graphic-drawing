import Component from 'vue-class-component';
/*
 * アプリケーションのトップレベルコンポーネントです
 */
require('./app.scss');
@Component({
    template: require('./app.pug')
})
export class App {

}
