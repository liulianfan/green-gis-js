import { Bound } from "../util/bound";
import { WebMercator } from "../projection/web-mercator";
/*
 * 栅格
 */
export class Raster {
    /**
     * 创建栅格
     * @remarks
     * 遍历图形集合进行绘制
     * @param {number} xmin - 经度左值
     * @param {number} ymin - 纬度下值
     * @param {number} xmax - 经度右值
     * @param {number} ymax - 纬度上值
     * @param {number} width - 栅格宽度
     * @param {number} height - 栅格高度
     * @param {number} cellsize - 栅格大小
     */
    constructor(xmin, ymin, xmax, ymax, width = 1000, height = 1000) {
        this._canvas = document.createElement("canvas");
        this._canvas.width = width;
        this._canvas.height = height;
        this._bound = new Bound(xmin, ymin, xmax, ymax);
    }
    /*
     * 动态栅格（实时渲染）
     */
    get dynamic() {
        return false;
    }
    /*
     * 画布存放Image
     */
    get canvas() {
        return this._canvas;
    }
    /*
     * 栅格经纬度边界
     */
    get bound() {
        return this._bound;
    }
    /**
     * 绘制栅格
     * @remarks
     * 遍历图形集合进行绘制
     * @param {CanvasRenderingContext2D} ctx - 绘图上下文
     * @param {Projection} projection - 坐标投影转换
     * @param {Bound} extent - 当前可视范围
     * @param {number} zoom - 当前缩放级别
     */
    draw(ctx, projection = new WebMercator(), extent = projection.bound, zoom = 10) {
    }
}
