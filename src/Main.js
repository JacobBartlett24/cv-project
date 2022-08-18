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
  grid-template-rows: repeat(6,4rem);
  height: 17rem;
  width: 50vw;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: grey;
  `

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 6rem;
  width: 50vw;  
  background:grey;
`

const InputStyle = styled.div`
  background: grey;
  list-style: none;
  width:50vw;
  margin-top: 2rem;
`

class AppComponent extends Component{
  constructor(props){
    super(props)

    this.state = {
      child: {html: ''},
      children: [],
    }

  }

  addWorkExperience = (e) =>{
    e.preventDefault();
    this.setState({
      child: {html: <div>
        
                        <input type="text" style = {{lineHeight: 2}}placeholder="Name" id = 'names' style = {{height: 20}}/>
                        <input type="text" style = {{lineHeight: 2}}placeholder="Name" id = 'name2' style = {{height: 20}}/>
                        <input type="text" style = {{lineHeight: 2}}placeholder="Name" id = 'name3' style = {{height: 20}}/>
                    </div>
      },

      children: this.state.children.concat(this.state.child),
    });
    console.log(this.state.children);

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
            <ListStyle>
              <ul>
                {children.map((child) =>{
                  return <InputStyle>
                    <li>{child.html}</li>
                  </InputStyle>
                })}
              </ul>
            </ListStyle>
            <button onClick={this.addWorkExperience}
            id = 'workExperience'
            style={{height: 20}}>
              Add Previous Work Experience
            </button>
          </ContainerStyle>
          
           
          
          <button type = 'submit' id = 'submit'style = {{height: 30}}>Submit</button>  
          </form>
        </FormStyle>
        
      </div>
      </MainStyle>
    );
  }

}

  

export default AppComponent;