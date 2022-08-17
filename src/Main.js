import React, { Component } from "react";
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
  grid-template-rows: repeat(5,4rem);
  height: 17rem;
  width: 50vw;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: grey;
  `

  const WorkExperience = styled.div`
  
  `
class AppComponent extends Component{
  constructor(props){
    super(props)

    this.state = {
      child: {inner: ''},
      children: [],
    } 
  }

  render(){
    const {child, children} = this.state
    return(
      <MainStyle>
      <div>
        <Title><h1>{this.props.title}</h1></Title>
        <FormStyle>
          <form action="">
          <ContainerStyle>
            <input type="text" placeholder="Name" id = 'name' style = {{height: 20}}/>
            <input type="number" placeholder="Number" id = 'number' style = {{height: 20}}/>
            <input type="email" placeholder="Email" id = 'email' style = {{height: 20}}/>
            <input type="text" placeholder="Desired Salary" id = 'salary' style = {{height: 20}}/> 
            <button 
            id = 'workExperience'
            style={{height: 20}}>
              Add Previous Work Experience
            </button>
          </ContainerStyle>
          <WorkExperience>  
            <input type="text" placeholder="Previous Job Title" id = 'salary' style = {{height: 20}}/> 
          </WorkExperience>
          <button type = 'submit' id = 'submit'style = {{height: 30}}>Submit</button>  
          </form>
        </FormStyle>
        
      </div>
      </MainStyle>
    );
  }

}

export default AppComponent;