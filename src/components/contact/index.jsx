import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div `
background-color: #ccc;
`;

export function Contact(props) {
    return (
        <ContactContainer id="contact" className="contactbg">
            <h2>Contact</h2>
        </ContactContainer>
        
    );
}