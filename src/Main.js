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
const ContainerStyle = styled.div`
  display: grid;
  grid-template-rows: repeat(7,1fr);
  height: 60vh;
  width: 50vw;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: grey;
`

const MainContainer = () => {
  return (
    <ContainerStyle>
    <input type="text" placeholder="Name" id = 'name' style = {{height: 20}}/>
    <input type="number" placeholder="Number" id = 'number' style = {{height: 20}}/>
    <input type="email" placeholder="Email" id = 'email' style = {{height: 20}}/>
    <input type="text" placeholder="Current Job" id = 'job' style = {{height: 20}}/>
    <input type="text" placeholder="Previous Workplace" id = 'workplace' style = {{height: 20}}/>
    <input type="text" placeholder="Desired Salary" id = 'salary' style = {{height: 20}}/>
    <button type = 'submit' id = 'submit'style = {{height: 30}}>Submit</button> 
    </ContainerStyle>
  );
}

const Main = (props) => {

  const {title} = props

  return(
    <MainStyle>
    <div>
      <Title><h1>{title}</h1></Title>
      <FormStyle>
        <form action="">
          <MainContainer />  
        </form>
      </FormStyle>
      
    </div>
    </MainStyle>
  );
}

export default Main;