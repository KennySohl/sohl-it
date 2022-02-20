import React from "react";
import styled from "styled-components";
import SohlitLogoImg from "../../assets/logo_v4.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
    width: 43px;
    height 37px;

    scrollbar-width: none;
    &::-webkit-scrollbar{
        display:none;
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={SohlitLogoImg} alt="Sohl.it Logo" />
      </LogoImg>
      <LogoText><Link href="#main">Sohl.it</Link></LogoText>
    </LogoWrapper>
  );
}
