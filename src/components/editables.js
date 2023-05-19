import React from "react";
import { useMap, GeoJSON } from "react-leaflet";
import "./css/Editable.css";
import { useState, useEffect } from "react";
import buffer from "@turf/buffer";
import * as turf from "@turf/turf";
import { useDispatch } from "react-redux";
import { setMapBounds } from "../features/maps/mapZoomSlice";
import L from "leaflet";
const Editable = ({ tools }) => {
  let map = useMap();
  const dispatch = useDispatch();
  const [buff, setBuff] = useState(10);
  const [aoi, setAoi] = useState({
    id: null,
    geojson: null,
  });
  const [poi, setPoi] = useState();

  useEffect(
    () => () => {
      map.eachLayer(function (layer) {
        if (layer.pm != null) {
          layer.remove();
        }
      });
    },
    []
  );

  useEffect(() => {
    if (poi !== undefined) {
      // var point = turf.point([poi.lng, poi.lat]);
      var buffered = turf.buffer(poi, buff, { units: "miles" });
      setAoi({ id: buff, geojson: buffered });
      dispatch(setMapBounds({ geojson: buffered }));
    }
  }, [buff]);

//   var div = L.DomUtil.get("ediit"); // this must be an ID, not class!
//   // L.DomEvent.on(div, "mousewheel", L.DomEvent.stopPropagation);
//   div!==null&&L.DomEvent.on(div, "click", L.DomEvent.stopPropagation);
  map.on("pm:create", (e) => {
    if (e.shape === "Marker") {
      var point = turf.point([e.layer._latlng.lng, e.layer._latlng.lat]);
      setPoi(point);
      var buffered = turf.buffer(point, buff, { units: "miles" });
      setAoi({ id: e.layer._leaflet_id, geojson: buffered });
      map.pm.disableDraw();
    } else if (e.shape == "Polygon") {
      let cords = e.layer._latlngs;
      let ccds1 = cords[0].map((e) => [e.lng, e.lat]);
      ccds1.push(ccds1[0]);
      var point = turf.polygon([ccds1], { name: "poly1" });
      setPoi(point);
      var buffered = turf.buffer(point, buff, { units: "miles" });
      setAoi({ id: e.layer._leaflet_id, geojson: buffered });
    } else if (e.shape == "Line") {
      let cords = e.layer._latlngs;
      let ccds1 = cords.map((e) => [e.lng, e.lat]);
      var point = turf.lineString(ccds1, { name: "line 1" });
      setPoi(point);
      var buffered = turf.buffer(point, buff, { units: "miles" });
      setAoi({ id: e.layer._leaflet_id, geojson: buffered });
    }


    dispatch(setMapBounds({ geojson: buffered }));
    map.pm.disableDraw();
  });
  const togglePoint = () => {
    map.eachLayer(function (layer) {
      if (layer.pm != null) {
        layer.remove();
      }
    });
    map.pm.enableDraw("Marker");
  };
  const togglePolygon = () => {
    map.eachLayer(function (layer) {
      if (layer.pm != null) {
        layer.remove();
      }
    });
    map.pm.enableDraw("Polygon");
  };
  const togglePolyline = () => {
    map.eachLayer(function (layer) {
      if (layer.pm != null) {
        layer.remove();
      }
    });
    map.pm.enableDraw("Line");
  };

  return (
    <>
      <div id="ediit" className="Editable Leaflet-Control">
        <div className="Editable-Tools">
          <i
            className="control-buttons fa fa-thumbtack"
            onClick={() => togglePoint()}
          ></i>
          <i
            className="control-buttons fa fa-ruler"
            onClick={() => togglePolyline()}
          ></i>
          <i
            className="control-buttons fa fa-draw-polygon"
            onClick={() => togglePolygon()}
          ></i>
        </div>
        <input
          id="Source1"
          type="range"
          min={0}
          step={0.5}
          max={50}
          onChange={(event) => setBuff(event.target.value)}
        /> 
        Buffer ({buff} Km)
      </div>

      <GeoJSON key={aoi.id} data={aoi.geojson} />
    </>
  );
};

export default Editable;
