import React from "react";
import styled from "styled-components";

const MainStyle = styled.div`
  height: calc(100vh - 160px);
  display: flex;
  justify-content: center;
`

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
`

const Main = (props) => {

  const {title} = props

  return(
    <MainStyle>
    <div>
      <Title><h1>{title}</h1></Title>
      
      <form action="">
      <FormStyle>
        <label htmlFor=""></label>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Number"/>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Current Job"/>
        <input type="text" placeholder="Previous Workplace"/>
        <input type="text" placeholder="Desired Salary"/>
        
        <button>Submit</button> 
      </FormStyle>
      </form>
      
    </div>
    </MainStyle>
  );
}

export default Main;