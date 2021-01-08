
import {Map, Graphic, SimpleMarkerSymbol, Point, Polyline, SimpleLineSymbol, BD09, GCJ02, LatLngType, Tile} from "../dist";

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
    //map.setTileUrl("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png");
    map.grid.url = "http://localhost:4000/tiles/vector/{id}/{x}/{y}/{z}";
    /*map.grid.addLayer({
        _id: "5fcef06f48c22b33787185e9",
        name : "province",
        class: {
            name: "province",
            geotype: 3
        }
    });*/
    map.grid.addLayer({
        _id: "5faa43ffabe6782ae0ed01b4",
        name : "pipe",
        class: {
            name: "pipe",
            geotype: 2
        }
    });
    map.setView([109.519, 18.271], 13);

}

//cause typescript tsc forget js suffix for geometry.js