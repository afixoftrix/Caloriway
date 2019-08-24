import React from 'react'
import { Marker } from "react-map-gl";
import { FaPizzaSlice } from "react-icons/fa";

const Mark = ({ longitude, latitude, focus}) => {
    return (
        <Marker longitude={longitude} latitude={latitude}>
            <FaPizzaSlice
                color={focus ? "#1afb44" : "#ff5"}
                size={focus ? "2.2em" : "1.5em"}
            />
        </Marker>
    );
}

export default Mark
