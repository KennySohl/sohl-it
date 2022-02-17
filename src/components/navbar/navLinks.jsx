import React from "react";
import styled from "styled-components"

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const LinkWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
`;

const LinkItem = styled.li`
    height: 100%;
    padding: 0 1.1em;
    color: #222;
    font-weight: 500;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 200ms ease-in-out;

    &:hover {
        border-top: 2px solid #00c9ff;     
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;

export function NavLinks(props) {
        return <NavLinksContainer>
            <LinkWrapper>
                <LinkItem><Link href="#">About</Link></LinkItem>
                <LinkItem><Link href="#">Work</Link></LinkItem>
                <LinkItem><Link href="#">Contact</Link></LinkItem>
                <LinkItem><Link href="#">Linkedin</Link></LinkItem>
                <LinkItem><Link href="#">GitHub</Link></LinkItem>
            </LinkWrapper>
        </NavLinksContainer>
}