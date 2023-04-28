import React from 'react'
import { useSelector } from "react-redux";

export default function InfoBox(){
    const selectedDistricts = useSelector(state => state.selectedDistricts);

    return (
    <div>
        <h2>Info Box</h2>
        <ol>
        {selectedDistricts.map((district, index) => (
          <li key={index}>{district}</li>
        ))}
      </ol>
    </div>
    )
}