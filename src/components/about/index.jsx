import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div `
    background-color: #eee;
    
`;

export function About(props) {
    return (
        <AboutContainer id="about" className="aboutbg">
            <h2>About</h2>
        </AboutContainer>
        
    );
}