import React from "react";
import styled from "styled-components";
import { About } from "../about";
import { Contact } from "../contact";
import { Main } from "../main";
import { Work } from "../work";

const SectionsContainer = styled.div `
    width: 100%;
    height: calc(100vh - 60px);
    background-color: lightsalmon;
    position: relative;
    top: 60px;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display:none;
    }

    > *{
        width: 100%;
        height: calc(100vh - 60px);
        scroll-snap-align: start;
    }
`;

export function Sections(props) {
    return (
        <SectionsContainer>
            <Main />
            <About />
            <Work />
            <Contact />
        </SectionsContainer>
        
    );
}