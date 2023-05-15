import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { setAnalyticsDetails } from "./overlays/layersSlice";
import { layers } from "./Config";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";

export default function LayerTree() {
  const [districtList, setDistricts] = useState([]);
  const [selectedVillages, setSelectedVillages] = useState([]);
  // const [selectedLayers, setSelectedLayers] = useState([]);

  const dispatch = useDispatch();

  
  useEffect(() => {
    fetch("https://api.nesdr.gov.in/asdma/flood-low.php")
      .then((response) => response.json())
      .then((data) => {
        setDistricts(data);
      });
  }, []);
  
  const handleDistrictChange = (e) => {
    const { labels } = e.target;
    const { innerText } = labels[0];
    const value = innerText;
    
    console.log(innerText);

    dispatch({
      type: "SELECTED_DISTRICTS",
      payload: value,
    });
  };

  const handleLayerToggle = (layerId, show, layer) => {
    console.log("handleLayerToggle called", layerId, show)
    dispatch(setAnalyticsDetails({ id: layerId, show, layer }));
  };

  const handleVillageCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedVillages([...selectedVillages, value]);
    } else {
      setSelectedVillages(selectedVillages.filter((village) => village !== value));
    }
  };

  useEffect(() => {
    dispatch(setAnalyticsDetails(selectedVillages));
  }, [selectedVillages, dispatch]);


  return (
    <div style={{ paddingTop: "20px" }}>
      <table>
        <tbody>
          <tr>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Rivers
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <ListGroup>
                    {districtList.map((district, index) => (
                      <ListGroup.Item key={"district"+index}>
                        <Form.Check
                          type="checkbox"
                          id={"district"+index}
                          label={district.rc_name}
                          checked={district.selected}
                          onChange={handleDistrictChange}
                        />
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td>
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
            </td>
          </tr>
            
          <tr>
           <td>
              <h3>Villages</h3>
              <Form>
                {layers.map((layer) => {
                  if (layer.id === 6) {
                    return (
                      <Form.Check
                        key={layer.id}
                        type="checkbox"
                        id={`village-checkbox-${layer.id}`}
                        label={layer.text}
                        value={layer.class}
                        checked={selectedVillages.includes(layer.class)}
                        onChange={handleVillageCheckboxChange}
                      />
                    );
                  }
                  return null;
                })}
              </Form>
            </td>
        </tr>

        </tbody>
      </table>
    </div>
  );
}