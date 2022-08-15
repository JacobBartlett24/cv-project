import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  background-color: black;
  color: white;
  margin: 0;
  display: flex;
  justify-content: center;
`

const Header = (props) => {

  const {title} = props

  return(
    <FooterStyle>
      <div >
        <h1>{title}</h1>
      </div>
    </FooterStyle>
  );
}

export default Header;