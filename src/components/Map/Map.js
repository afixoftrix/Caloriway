import React, { Component } from "react";
import ReactMapGL from "react-map-gl";
import Mark from "./Marker.js";

class Map extends Component {
    state = {
        viewport: {
            width: "100%",
            height: 400,
            latitude: 36.84188839439507,
            longitude: -76.30130049904886,
            zoom: 10.8
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
                width: window.innerWidth
            }
        });
    };

    render() {
        const { data, getMap, focus } = this.props
        let datapoints
        try {
            datapoints = data.map((point, i) => (
                    <Mark
                        latitude={point.center[1]}
                        longitude={point.center[0]}
                        focus={ point.text === focus }
                        key={i}
                    />
                ))
        } catch (error) {
            
        }

        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={viewport => {
                    getMap(this.state.viewport)
                    this.setState({ viewport });
                }}
                mapStyle={require("../../assets/mapbox/style.json")}
                mapboxApiAccessToken={
                    process.env.REACT_APP_ACCESS_TOKEN
                }
            >
                { datapoints }
            </ReactMapGL>
        );
    }
}

export default Map