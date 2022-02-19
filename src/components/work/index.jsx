import React from "react";
import styled from "styled-components";

const WorkContainer = styled.div `
background-color: red;
`;

export function Work (props) {
    return (
        <WorkContainer>
            <h2>Work</h2>
        </WorkContainer>
        
    );
}