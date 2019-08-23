import React from 'react'
import styled from 'styled-components'
import {
    Drawer,
    DrawerHeader,
    DrawerContent
} from "@rmwc/drawer";
import "@material/drawer/dist/mdc.drawer.css";
import { TextInput } from '../Input';


export const InputBox = styled.div`

    border-bottom: 1px solid rgba(255,255,255,0.5);

    div {
        width: ${ props => props.show ? "100%" : "0%"};
        transition: width 0.4s ease-in-out;
        overflow: hidden;
    }
    .input-container {
        
        .search-input {
            border: none;
            outline: none;
            ::placeholder{
                color: #fff;
            }
        }
    }
`
const Content = styled.div`
    padding: 40px 20px 20px;
`

const Sidebar = ({ show, onClose, onChange }) => {
    return (
        <>
            <Drawer modal style={{width: 600}} open={show} onClose={onClose}>
                <DrawerHeader>
                    <TextInput name="searchQuery" placeholder="Search destination" onChange={onChange} />
                </DrawerHeader>
                <DrawerContent>
                    <Content>
                        Nothing to see here, move along...
                    </Content>
                </DrawerContent>
            </Drawer>
        </>
    );
}
export default Sidebar
