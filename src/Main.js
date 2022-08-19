import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import styled from "styled-components";

const MainStyle = styled.div`
  height: calc(100vh - 160px);
  display: flex;
  justify-content: center;
  overflow: scroll;
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
  grid-template-rows: repeat(4,4rem);
  height: 17rem;
  width: 50vw;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: grey;
  `

const ListStyle = styled.div`
  background: grey;
  list-style: none;
`

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const UnordedListStyle = styled.div`
display: flex;
justify-content: center;
aligin-items: center;
margin: 10px; 
width: 17rem;
`

class AppComponent extends Component{
  constructor(props){
    super(props)

    this.state = {
      child: {html: ''},
      children: [],
      name: '',
      number: '',
      email: '',
      salary: '',
    }

  }

  removeWorkExperience(index){
    
  }

  addWorkExperience = (e) =>{
    e.preventDefault();
    this.setState({
      child: {html: 
        <InputStyle>
          <div style = {{borderWidth: 10 + 'rem',marginTop: 1 + 'rem', marginBottom: 2 + 'rem'}}><input type="text" placeholder="Place of work" style = {{height: 20}}/></div>
          <div style = {{marginTop: 1 + 'rem', marginBottom: 2 + 'rem'}}><input type="text" placeholder="Job title" style = {{height: 20}}/></div>
          <div style = {{marginTop: 1 + 'rem', marginBottom: 2 + 'rem'}}><input type="number" placeholder="Years of experience" style = {{height: 20}}/></div>
        </InputStyle>
                    
      },

      children: this.state.children.concat(this.state.child),
    });
  }

  

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  handleNumberChange = (e) => {
    this.setState({
      number: e.target.value,
    })
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  handleSalaryChange = (e) => {
    this.setState({
      salary: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      name: '',
      number: '',
      email: '',
      salary: '',
    });
  }

  render(){
    const {child, children} = this.state
    return(
      <MainStyle>
      <div>
        <Title><h1>{this.props.title}</h1></Title>
        <FormStyle>
          <form action="" onSubmit={this.onSubmit}>
          <ContainerStyle>
            <input 
            type="text" 
            value = {this.state.name} 
            onChange = {this.handleNameChange}
            placeholder="Name" 
            id = 'name' 
            style = {{height: 20}}/>

            <input 
            type="text" 
            value={this.state.number}
            onChange={this.handleNumberChange}
            placeholder="Number" 
            id = 'number' 
            style = {{height: 20}}/>

            <input 
            type="email" 
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder="Email" 
            id = 'email' 
            style = {{height: 20}}/>

            <input 
            type="text" 
            value={this.state.salary}
            onChange={this.handleSalaryChange}
            placeholder="Desired Salary" 
            id = 'salary' 
            style = {{height: 20}}/>

            <button onClick={this.addWorkExperience}
            id = 'workExperience'
            style={{height: 20}}>
              Add Previous Work Experience
            </button>
            
            <UnordedListStyle>
            <ul>
              {children.map((child, index) =>{
                return(  
                <ListStyle>
                  <li>
                      {child.html}
                      <button onClick={this.removeWorkExperience(index)}>
                        Remove Work Experience
                      </button>
                    </li>
                </ListStyle>
              )})}
            </ul>
            </UnordedListStyle>
            
          </ContainerStyle>  
          {//<button type = 'submit' id = 'submit'style = {{height: 30}}>Submit</button>    
  }</form>
          
        </FormStyle>
        
      </div>
      </MainStyle>
    );
  }

}

  

export default AppComponent;