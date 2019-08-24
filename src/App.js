import React from "react";
import { Helmet } from 'react-helmet'
import Map from "./components/Map/Map";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { mapboxAPI, getRestaurants } from "./api";
import Info from "./components/Info";
import Status from "./components/Status";
import search from "./search"

class App extends React.Component {
    state = {
        showSideBar: false,
        showInfo: false,
        immutable: [],
        appData: [],
        mapData: {
            width: "100%",
            height: 400,
            latitude: 36.84188839439507,
            longitude: -76.30130049904886,
            zoom: 10.8
        },
        restaurant: {},
        query: '',
        focus: ''
    };

    componentDidMount() {
        const url = mapboxAPI(process.env.REACT_APP_DEFAULT_BBOX);
        getRestaurants(url).then(res => {
            this.setState({ 
                appData: res.data.features,
                immutable: res.data.features
            });
        });
    }

    getMapData = data => {
        this.setState({ mapData: { ...data } });
    };

    handleClose = e => {
        this.setState({ showSideBar: false });
    };

    toggleInfo = () => {
        this.setState({ showInfo: !this.state.showInfo });
    };

    handleInputQuery = e => {
        this.setState({ query: e.target.value }, () =>
            this.handleQueryUpdate(this.state.query)
        );
    }

    handleQueryUpdate = query => {
        const { immutable } = this.state
        if (immutable.length !== 0){
            const newData = search(immutable, query );
            this.setState({ appData: newData })
        }
        else {
            console.log("connection error");
        }
    }

    itemClick = info => {
        this.setState({ 
            restaurant: info,
            showSideBar: !this.state.showSideBar, 
            focus: info.name
        })
    }

    render() {
        const { showInfo, showSideBar, appData, mapData, restaurant, focus } = this.state;
        return (
            <div>
                <Helmet>
                    <link
                        href="https://api.mapbox.com/mapbox-gl-js/v1.2.0/mapbox-gl.css"
                        rel="stylesheet"
                    />
                    <title>Caloriway</title>
                    <link
                        rel="shortcut icon"
                        href={require("./assets/favicon.ico")}
                    />
                </Helmet>
                <div className="app-container">
                    <Navbar
                        appTitle="Caloriway"
                        onClick={() =>
                            this.setState({ showSideBar: !showSideBar })
                        }
                        infoClick={this.toggleInfo}
                    />
                    <Info showInfo={showInfo} onClick={this.toggleInfo} />
                    <Sidebar
                        itemClick={ this.itemClick }
                        show={showSideBar}
                        data={appData}
                        onChange={this.handleInputQuery}
                        onClose={this.handleClose}
                    />
                    <div className="body-container">
                        <div id="map">
                            <Map data={appData} getMap={this.getMapData} focus={focus}/>
                        </div>
                        <Status mapData={ mapData } restaurant={ restaurant } />
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
