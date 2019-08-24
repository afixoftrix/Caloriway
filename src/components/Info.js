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


const Title = styled.div`
    font-family: "IBM Plex Sans";
    font-weight: bold;
`;
const Content = styled.div`
    font-family: "IBM Plex Sans";
`;
const Info = ({ showInfo, onClick }) => {
    return (
        <>
            <Dialog open={showInfo}>
                <DialogTitle>
                    <Title>App Info</Title>
                </DialogTitle>
                <DialogContent>
                    <Content>
                        Click on the appbar at the left part of the navigation to see a list of restaurants in the area.
                    </Content>
                </DialogContent>
                <DialogActions>
                    <DialogButton onClick={onClick}>close</DialogButton>
                </DialogActions>
            </Dialog>
        </>
    );
};
export default Info