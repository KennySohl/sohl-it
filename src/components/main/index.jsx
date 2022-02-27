import React from "react";
import styled from "styled-components";
import { Profile } from "./profile";
import { Text } from "./textbar";

const MainContainer = styled.div `
    display:flex;
`;

const LeftContainer = styled.div `
    flex: 0.5;
`
const RightContainer = styled.div `
    flex: 0.5;
`

export function Main(props) {
    return (
        <MainContainer id="main" className="mainbg">
            <LeftContainer>
                <Profile />
            </LeftContainer>
            <RightContainer>
                <Text />
            </RightContainer>
            
        </MainContainer>
        
    );
}