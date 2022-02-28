import React from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TextWrapper = styled.div`
    width: 100%;
    height: 85%;   
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
      color: #fff;
      position: absolute;
      bottom: 10px;
  
      svg {
        animation: arrowBlink 2s infinite;
      }

      @keyframes arrowBlink {
        100%{
          opacity: 0;
        }
      }
    }
`;

const TextArea = styled.div`

  color: #fff;
  text-transform: uppercase;
  position: relative;

  
`;

export function Text(props) {
  return (
    <TextWrapper>
      <TextArea>
        <h2>Hey, I'm</h2>
        <h1>Kenny Sohl</h1>
        <h3>Developer <span>Fullstack</span></h3>
        
      </TextArea>
      <a href="#about">
          <KeyboardArrowDownIcon sx={{ fontSize: 50 }} />
        </a>
    </TextWrapper>
  );
}
