import React from "react";
import styled from "styled-components";

const WorkContainer = styled.div `
background-color: #ddd;
`;

export function Work (props) {
    return (
        <WorkContainer id="work" className="workbg">
            <h2>Work</h2>
        </WorkContainer>
        
    );
}