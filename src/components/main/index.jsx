import React from "react";
import styled from "styled-components";

const MainContainer = styled.div `
background-color: purple;
`;

export function Main(props) {
    return (
        <MainContainer>
            <p>Hey, my name is</p>
            <h1>Kenny Sohl</h1>
        </MainContainer>
        
    );
}