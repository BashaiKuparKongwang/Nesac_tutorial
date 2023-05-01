import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";

export default function CheckboxList() {
  const [districtList, setDistricts] = useState([]);
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
    const {innerText} = labels[0];
    const value = innerText;
   
    dispatch({
      type: "SELECTED_DISTRICTS",
      payload: value,
    });
  };
  

  return (
    <div style={{ paddingTop: "20px" }}>
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
    </div>
  );
}