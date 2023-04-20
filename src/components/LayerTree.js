import React, {useEffect,useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

// const districts = [
//   { id: 1, name: 'Barpeta' },
//   { id: 2, name: 'Biswanath' },
//   { id: 3, name: 'Bongaigaon' },
//   { id: 4, name: 'Cachar' },
//   { id: 5, name: 'Charaideo' },
//   { id: 6, name: 'Chirang' },
//   { id: 7, name: 'Darrang' },
//   { id: 8, name: 'Dhemaji' },
//   { id: 9, name: 'Dhubri' },
//   { id: 10, name: 'Dibrugarh' },
//   { id: 11, name: 'Dima Hasao' },
//   { id: 12, name: 'Goalpara' },
//   { id: 13, name: 'Golaghat' },
//   { id: 14, name: 'Hailakandi' },
//   { id: 15, name: 'Hojai' },
//   { id: 16, name: 'Jorhat' },
//   { id: 17, name: 'Kamrup' },
//   { id: 18, name: 'Kamrup Metropolitan' },
//   { id: 19, name: 'Karbi Anglong' },
//   { id: 20, name: 'Karimganj' },
//   { id: 21, name: 'Kokrajhar' },
//   { id: 22, name: 'Lakhimpur' },
//   { id: 23, name: 'Majuli' },
//   { id: 24, name: 'Morigaon' },
//   { id: 25, name: 'Nagaon' },
//   { id: 26, name: 'Nalbari' },
//   { id: 27, name: 'Sivasagar' },
//   { id: 28, name: 'Sonitpur' },
//   { id: 29, name: 'South Salmara-Mankachar' },
//   { id: 30, name: 'Tinsukia' },
//   { id: 31, name: 'Udalguri' },
//   { id: 32, name: 'West Karbi Anglong' },
// ];

function CheckboxList() {
  const [districts, setDistricts]=useState([])
  useEffect(()=>{
//    setDistName("Test")
    console.log("component mounted")
    fetch("https://api.nesdr.gov.in/asdma/flood-low.php")
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
       setDistricts(data)
    })
}
  ,[])
  return (
    <ListGroup>
      {districts.map((district, index) => (
        <ListGroup.Item key={index}>
          <Form.Check type="checkbox" id={index} label={district.rc_name} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default CheckboxList;