import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div `
background-color: green;
`;

export function Contact(props) {
    return (
        <ContactContainer>
            <h2>Contact</h2>
        </ContactContainer>
        
    );
}