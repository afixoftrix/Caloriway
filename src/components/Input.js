import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    padding-top: 100px;
    padding-bottom: 10px;
`;
const Input = styled.input`
    font-family: "IBM Plex Sans";
    border: none;
    background-color: transparent;
    outline: none;
    font-size: 18px;
    width: 100%;
    
    ::placeholder{
        color: rgba(0,0,0,0.4);
    }
`;

export const TextInput = ({ name, placeholder, onChange }) => {
    return (
        <Container>
            <Input name={name} type="text" placeholder={placeholder} onChange={onChange} />
        </Container>
    )
}

