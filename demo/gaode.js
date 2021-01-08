
import {Map, Graphic, SimpleMarkerSymbol, Point, Polyline, SimpleLineSymbol, BD09, GCJ02, LatLngType} from "../dist";

window.load = async () => {
    //1.自定义样式
    const amap = new AMap.Map("amap", {
        navigationMode: 'classic',
        zooms: [1, 20],
        //mapStyle: 'normal',
        mapStyle: 'amap://styles/1e65d329854a3cf61b568b7a4e2267fd',
        features: ['road', 'point', 'bg'],
        viewMode: '2D'
    });

    //2.加载高德影像
    const satellite = new AMap.TileLayer.Satellite();
    satellite.setMap(amap);

    const map = new Map("foo");
    map.on("extent", (event) => {
        amap.setZoomAndCenter(event.zoom, event.center, true);
        document.getElementById("x").value = Math.round(event.center[0] * 1000)/1000;
        document.getElementById("y").value = Math.round(event.center[1] * 1000)/1000;
        document.getElementById("zoom").value = event.zoom;
        document.getElementById("x1").value = Math.round(event.extent.xmin * 1000)/1000;
        document.getElementById("y1").value = Math.round(event.extent.ymin * 1000)/1000;
        document.getElementById("x2").value = Math.round(event.extent.xmax * 1000)/1000;
        document.getElementById("y2").value = Math.round(event.extent.ymax * 1000)/1000;
        document.getElementById("a").value = Math.round(event.matrix.a * 1000)/1000;
        document.getElementById("d").value = Math.round(event.matrix.d * 1000)/1000;
        document.getElementById("e").value = Math.round(event.matrix.e * 1000)/1000;
        document.getElementById("f").value = Math.round(event.matrix.f * 1000)/1000;
    });
    map.setView([116.397411,39.909186], 12);
    map.setProjection(new GCJ02(LatLngType.GPS));
    const marker = new SimpleMarkerSymbol();
    marker.width = 32;
    marker.height = 32;
    marker.offsetX = -16;
    marker.offsetY = -32;
    marker.url = "assets/img/marker.svg";
    await marker.load();
    const point = new Point(116.397411,39.909186);
    const graphic = new Graphic(point, marker);
    map.addGraphic(graphic);

}

//cause typescript tsc forget js suffix for geometry.js