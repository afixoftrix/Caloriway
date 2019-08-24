import React from "react";
import styled from "styled-components";
import { Drawer, DrawerHeader, DrawerContent } from "@rmwc/drawer";

import { TextInput } from "../Input";
import { List } from "@rmwc/list";

import "@material/drawer/dist/mdc.drawer.css";
import "@material/list/dist/mdc.list.css";
import Item from "../ListItem";

export const InputBox = styled.div`
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);

    div {
        width: ${props => (props.show ? "100%" : "0%")};
        transition: width 0.4s ease-in-out;
        overflow: hidden;
    }
    .input-container {
        .search-input {
            border: none;
            outline: none;
            ::placeholder {
                color: #fff;
            }
        }
    }
`;

const Sidebar = ({ data, show, itemClick, onClose, onChange }) => {
    let x
    try {
        x = data.map(item => {
            return (
                <Item
                    name={item.text}
                    address={item.properties.address}
                    type={item.properties.category}
                    itemClick={itemClick}
                    key={item.id}
                />
            );
        });
    } catch (error) {
        x = <div>loading...</div>
    }
    return (
        <>
            <Drawer modal style={{ width: 600, maxWidth: "80%" }} open={show} onClose={onClose}>
                <DrawerHeader>
                    <TextInput
                        name="searchQuery"
                        placeholder="Search destination"
                        onChange={onChange}
                    />
                </DrawerHeader>
                <DrawerContent>
                    <List twoLine>{ x }</List>
                </DrawerContent>
            </Drawer>
        </>
    );
};

Sidebar.defaultProps = {
    data: []
}
export default Sidebar;
