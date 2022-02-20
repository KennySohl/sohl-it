import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div `
    background-color: blue;
`;

export function About(props) {
    return (
        <AboutContainer id="about">
            <h2>About</h2>
        </AboutContainer>
        
    );
}