import React from "react";
import { Helmet } from 'react-helmet'
import Map from "./components/Map";
//<link href='https://api.mapbox.com/mapbox-gl-js/v1.2.0/mapbox-gl.css' rel='stylesheet' />


const App = () => {
    return (
        <div>
            <Helmet>
                <link
                    href="https://api.mapbox.com/mapbox-gl-js/v1.2.0/mapbox-gl.css"
                    rel="stylesheet"
                />
            </Helmet>
            <div>
                App
                <div id="map">
                    <Map />
                </div>
            </div>
        </div>
    );
};

export default App;
