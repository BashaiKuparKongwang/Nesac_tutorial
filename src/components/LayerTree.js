import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";

function CheckboxList() {
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    console.log("component mounted");
    fetch("https://api.nesdr.gov.in/asdma/flood-low.php")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDistricts(data);
      });
  }, []);

  return (
    <div style={{ paddingTop: "20px" }}>
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Rivers
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <ListGroup>
          {districts.map((district, index) => (
            <ListGroup.Item key={index}>
              <Form.Check type="checkbox" id={index} label={district.rc_name} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}

export default CheckboxList;
