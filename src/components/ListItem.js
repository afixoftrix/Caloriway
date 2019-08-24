import React from 'react'
import styled from 'styled-components'
import { FaPizzaSlice } from "react-icons/fa";
import { ListItemPrimaryText, ListItemSecondaryText, ListItem, ListItemText } from "@rmwc/list";


const Name = styled(ListItemPrimaryText)`
    font-size: 18px;
    font-family: "IBM Plex Sans";
`;
const Address = styled(ListItemSecondaryText)`
    font-family: "IBM Plex Sans";
`;
const Slice = styled.div`
    padding: 10px;
    margin-right: 10px;
`

const Item = ({ name, address, type, itemClick }) => {
    return (
        <ListItem onClick={() => itemClick({ name, address, type })}>
            <Slice>
                <FaPizzaSlice color="#555" />
            </Slice>
            <ListItemText>
                <Name>{name}</Name>
                <Address>{address}</Address>
            </ListItemText>
        </ListItem>
    );
}

export default Item
