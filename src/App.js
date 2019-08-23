import React from "react";
import { Helmet } from 'react-helmet'
import Map from "./components/Map/Map";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
//<link href='https://api.mapbox.com/mapbox-gl-js/v1.2.0/mapbox-gl.css' rel='stylesheet' />

class App extends React.Component {
    state = {
        showSideBar: false
    }
    
    handleClose = e => {
        this.setState({ showSideBar: false })
    }

    render() {
        const {showSideBar} = this.state
        return (
            <div>
                <Helmet>
                    <link
                        href="https://api.mapbox.com/mapbox-gl-js/v1.2.0/mapbox-gl.css"
                        rel="stylesheet"
                    />
                </Helmet>
                <div className="app-container">
                    <Navbar appTitle="Caloriway" 
                    onClick={ () => this.setState({ showSideBar: !showSideBar })}
                    />
                    <Sidebar show={showSideBar} onClose={ this.handleClose } />
                    <div className="body-container">
                        <div id="map">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
