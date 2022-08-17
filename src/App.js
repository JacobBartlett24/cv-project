import Header from './Header';
import AppComponent from './Main';
import Footer from './Footer';
import { Component } from 'react';


class App extends Component {

  
  render(){
    return (
      <div>
        <div className="App">
          <Header title = 'CV Project'/>
          <AppComponent title = 'CV Form' />
          <Footer title = 'Footer'/>
        </div>
      </div>
    );
  }
}

export default App;
