import React from "react";
import styled from "styled-components";

const TextWrapper = styled.div`
    width: 100%;
    height: 100%;   
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TextArea = styled.div`

`;

export function Text(props) {
  return (
    <TextWrapper>
      <TextArea>
        <h2>Hey, I'm</h2>
        <h1>Kenny Sohl</h1>
        <h3>Developer</h3>
      </TextArea>
    </TextWrapper>
  );
}
