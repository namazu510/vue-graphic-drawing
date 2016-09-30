import Component from 'vue-class-component';
import {CtxPointDrawer, Point} from '../../../lib/ctx-point-drawer';
/*
 * ローレンツ方程式によって描かれるカオス図形の描画
 */
@Component({
    template: require('./lorenz-attractor.pug')
})
export class LorenzAttractor {

    //canvas size
    width : number;
    height : number;


    drawNow: boolean;

    // ローレンツ方程式パラメータ
    param : {
        a: number,
        b: number
    };


    data(){

        this.width = 1000;
        this.height = 1000;

        this.param = {
            a: 1.25,
            b: 0.75
        };

        return {
            width: this.width,
            height: this.height,

            param: this.param,
            drawNow: this.drawNow
        }
    }


    drawTimerID :any;

    /**
     * 描画開始
     */

    drawer : CtxPointDrawer;

    draw() {

        if (this.drawNow === true) {
            return;
        }
        this.drawNow = true;

        var ctx = (<HTMLCanvasElement>document
            .getElementById('canvas')).getContext('2d');

        this.drawer = new CtxPointDrawer(ctx);
        this.drawer.setColor('rgba(124,155,255,50)');

        this.x = 0.1;
        this.y = 0.1;

        ctx.clearRect(0,0,this.width,this.height);

        this.drawTimerID = setInterval(this.drawPoints,1000/30);
    }

    x: number;
    y: number;
    drawPoints(){

        var x = this.x;
        var y = this.y;

        var _x: number;
        var _y: number;

        const p = this.param;

        var points: Point[] = new Array();

        for (var i = 0; i < 50; i++) {
            _x = (1 + p.a * p.b) * x - p.b * x * y;
            _y = (1 - p.b) * y + p.b * x * x;

            points.push({
                x: Math.round(_x * 120 + this.width * 0.5),
                y: Math.round(_y * 120 + this.height * 0.25)
            });

            x = _x;
            y = _y;
        }
        this.x = x;
        this.y = y;

        this.drawer.drawPoints(points);
    }



    /**
     * 描画停止
     */
    drawStop(){
        this.drawNow = false;
        clearInterval(this.drawTimerID);
    }

}
