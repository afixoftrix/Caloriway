import React, { Component } from "react";
import ReactMapGL from "react-map-gl";

class Map extends Component {
    state = {
        viewport: {
            width: "100%",
            height: 400,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
        }
    };
    componentDidMount() {
        this.widthUpdate();
        window.addEventListener("resize", this.widthUpdate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.widthUpdate);
    }

    widthUpdate = e => {
        this.setState({ 
            viewport: {
                ...this.state.viewport,
                width: window.innerWidth - 40
            }
        });
    };

    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={viewport =>
                    this.setState({ viewport })
                }
                mapStyle={require("../../assets/mapbox/style.json")}
                mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
            />
        );
    }
}

export default Map