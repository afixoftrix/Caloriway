import React from "react";
import styled from 'styled-components'
import {
    Dialog,
    DialogActions,
    DialogButton,
    DialogContent,
    DialogTitle
} from "@rmwc/dialog";
import "@material/dialog/dist/mdc.dialog.css";
import "@material/button/dist/mdc.button.css";


const Title = styled(DialogTitle)`
    font-family: "IBM Plex Sans";
`;
const Content = styled(DialogContent)`
    font-family: "IBM Plex Sans";
`;
const Info = ({ showInfo, onClick }) => {
    return (
        <>
            <Dialog
                open={showInfo}
            >
                <Title>App Info</Title>
                <Content>
                    Caloriway is supposed to be an app that finds the amount of
                    calories along a given path. The user puts in a start
                    point and an end point and then it the app calculate calories
                    based on how many restuarants and type of food served at
                    those restaurants. Right now it just shows you 5 restaurants in the Portsmouth
                    area of Virginia. #help {" "}
                </Content>
                <DialogActions>
                    <DialogButton onClick={onClick} >close</DialogButton>
                </DialogActions>
            </Dialog>
        </>
    );
};
export default Info