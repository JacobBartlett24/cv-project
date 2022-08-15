import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {

  document.body.style.margin = '0';

  return (
    <div className="App">
      <Header title = 'CV Project'/>
      <Main title = 'CV Form'/>
      <Footer title = 'Footer'/>
    </div>
  );
}

export default App;
