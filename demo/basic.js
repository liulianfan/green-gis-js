
import {Map, Graphic, SimpleMarkerSymbol, Point, Polyline, SimpleLineSymbol, BD09, GCJ02, LatLngType} from "../dist";

window.load = async () => {
    const amap = new AMap.Map("amap", {
        navigationMode: 'classic',
        zooms: [1, 20],
        mapStyle: 'amap://styles/normal',
        features: ['road', 'point', 'bg'],
        viewMode: '2D'
    });

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
    map.setView([116.397411,39.909186], 12.5);
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

    const start = 115.397411, end = 116.397411;
    const polyline1 = new Polyline([[start,39.909186],[end, 39.909186]]);
    const symbol1 = new SimpleLineSymbol();
    symbol1.strokeStyle = "#ff00ff";
    const graphic1 = new Graphic(polyline1, symbol1);
    map.addGraphic(graphic1);

    const lnglats = [];
    for (let lng = start; lng <= end; lng = lng + 0.01) {
        lnglats.push([lng, 39.909186]);
    }
    lnglats.push([end, 39.909186]);
    const polyline2 = new Polyline(lnglats);
    const symbol2 = new SimpleLineSymbol();
    symbol2.strokeStyle = "#22cc22";
    const graphic2 = new Graphic(polyline2, symbol2);
    map.addGraphic(graphic2);
}

//cause typescript tsc forget js suffix for geometry.js