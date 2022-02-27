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
    /* Safari 3-4, iOS 1-3.2, Android 1.6- */
    -webkit-border-radius: 50%; 
  
    /* Firefox 1-3.6 */
    -moz-border-radius: 50%; 
    
    /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
    border-radius: 50%; 

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
