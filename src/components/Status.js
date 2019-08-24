import React from 'react'
import styled from 'styled-components'
import { FaInfo } from 'react-icons/fa';


const Container = styled.div`
    margin: 0;
    display: flex;
    flex-wrap: wrap-reverse;
    height: 100%;

    .map-data {
        color: #aaa;
        padding: 10px 20px;
        border-top: 1px solid #aaa;
        border-bottom: 1px solid #aaa;
        text-transform: uppercase;
        font-weight: bold;
    }

    .status-right {
        padding: 20px;
        color: #ddd;
        border-left: 1px solid #aaa;

        .restaurant-name {
            padding-bottom: 20px;
            font-size: 28px;
        }
        .restaurant-type, .restaurant-address {
            padding-bottom: 10px;
            font-size: 16px;
            color: #aaa;
        }
    }
`;
const City = styled.div`
    padding: 20px;
    font-size: 24px;
    color: #aaa;
    font-family: "Lexend Deca", sans-serif;
    display: flex;

    .start-point-name {
        color: #ddd;
        padding-left: 20px;
    }
`;
const Pair = styled(City)`
    padding-top: 5px;
    padding-bottom: 0;
    font-size: 18px;
`;

const Status = ({ mapData, restaurant }) => {
    let x
    try {
        if (Object.keys(restaurant).length === 0){
            x = (
                <div>
                    <FaInfo /> Click on a restaurant in the sidebar
                    to learn more
                </div>
            );
        }
        else {
            x = (
                <div>
                    <div className="restaurant-name">
                        {restaurant.name}
                    </div>
                    <div className="restaurant-address">
                        {restaurant.address}
                    </div>
                    <div className="restaurant-type">
                        "{restaurant.type}"
                    </div>
                </div>
            );
        }
        
    } catch (error) {
        x = (
            <div>
                <FaInfo /> Click on a restaurant in the sidebar to learn
                more
            </div>
        );
    }
    return (
        <Container>
            <div className="status-left">
                <City>
                    <div>Start Point:</div>
                    <div className="start-point-name"> Portsmouth, VA </div>
                </City>
                <div className="map-data">Map data</div>
                <Pair>
                    <div>Longitude:</div>
                    <div className="start-point-name">
                        {Math.round(mapData.longitude * 100) / 100}
                    </div>
                </Pair>
                <Pair>
                    <div>Latitude:</div>
                    <div className="start-point-name">
                        {Math.round(mapData.latitude * 100) / 100}
                    </div>
                </Pair>
            </div>
            <div className="status-right">
                {x}
            </div>
        </Container>
    );
}

export default Status
