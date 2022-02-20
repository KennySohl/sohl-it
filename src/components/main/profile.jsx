import React from "react";
import styled from "styled-components";
import ProfileKennyImg from "../../assets/profile.png";

const ProfileWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    float: right;
    height: 60%;  
`;

const ProfileImg = styled.div`
    display: flex;
    

`;

export function Profile(props) {
  return (
    <ProfileWrapper>
      <ProfileImg>
        <img src={ProfileKennyImg} alt="Profile Image" />
      </ProfileImg>
    </ProfileWrapper>
  );
}
