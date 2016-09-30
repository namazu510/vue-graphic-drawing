/**
 * Canvasに点を打つ機能クラス
 */
export class CtxPointDrawer {
    private ctx : CanvasRenderingContext2D;

    private pointSize: number;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.pointSize = 1;
    }

    /**
     * 描画する点の色を指定
     * cssの色表記が使える
     * @param fillStyle
     */
    setColor(fillStyle : string){
        this.ctx.fillStyle = fillStyle;
    }

    /**
     * 描画する点の大きさを設定
     * デフォルト値は１
     * @param size
     */
    setPointSize(size: number) {
        this.pointSize = size;
    }


    /**
     * 指定された座標すべてに点を描画します
     * @param pos
     */
    drawPoints(pos: Point[]) : void{
        this.ctx.beginPath();
        pos.forEach((pos) => {
            //console.log(pos.x+":"+pos.y);
            this.ctx.arc(pos.x,pos.y,this.pointSize,0,Math.PI * 2 ,false);
            this.ctx.moveTo(pos.x,pos.y);
        });
        this.ctx.closePath();
        this.ctx.fill();
    }

    /**
     * 指定された座標に点を描画します
     * @param pos
     */
    drawPoint(pos: Point) : void{
        this.ctx.beginPath();
        this.ctx.arc(pos.x,pos.y,this.pointSize,0,Math.PI * 2 ,false);
        this.ctx.moveTo(pos.x,pos.y);
        this.ctx.closePath();
        this.ctx.fill();
    }

}

export interface Point {
    x: number,
    y: number
}