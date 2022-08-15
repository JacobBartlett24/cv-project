import React from "react";
import styled from "styled-components";


const HeaderStyle = styled.div`
  background-color: black;
  color: white;
  margin: 0;
  display: flex;
  justify-content: center;
`

const Header = (props) => {

  const {title} = props

  return(
    <HeaderStyle>
      <div >
        <h1>{title}</h1>
      </div>
    </HeaderStyle>
  );
}

export default Header;