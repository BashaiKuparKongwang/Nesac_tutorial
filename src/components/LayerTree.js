import React from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { setAnalyticsDetails } from "./overlays/layersSlice";
import { layers } from "./Config";

export default function LayerTree() {
  const dispatch = useDispatch();

  const handleLayerToggle = (layerId, show, layer) => {
    console.log("handleLayerToggle called", layerId, show)
    dispatch(setAnalyticsDetails({ id: layerId, show, layer }));
  };

  return (
    <div style={{ paddingTop: "20px" }}>
      <h3>Overlays</h3>
      <Form>
        {layers.map((layer) => (
          <Form.Check
            key={layer.id}
            type="checkbox"
            id={`layer-${layer.id}`}
            label={layer.text}
            defaultChecked={layer.show}
            onChange={(e) =>
              
              handleLayerToggle(
                layer.id,
                e.target.checked,
                e.target.checked ? layer.layer : null
                
              )
            }
          />
        ))}
      </Form>
    </div>
  );
}
