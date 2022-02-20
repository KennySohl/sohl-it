import React from "react";
import styled from "styled-components";
import { Profile } from "./profile";
import { Text } from "./textbar";

const MainContainer = styled.div `
    background-color: #fff;
    display:flex;
`;

const LeftContainer = styled.div `
    background-color: #fff;
    flex: 0.5;
`
const RightContainer = styled.div `
    background-color: #eee;
    flex: 0.5;
`

export function Main(props) {
    return (
        <MainContainer id="main">
            <LeftContainer>
                <Profile />
            </LeftContainer>
            <RightContainer>
                <Text />
            </RightContainer>
            
        </MainContainer>
        
    );
}