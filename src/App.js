import React from 'react';
import Navigation from './components/nav.js';
import FrontPage from './components/firstPage.js';
import 'bootstrap/dist/css/bootstrap.css';
import About from './components/about.js';


class App extends React.Component{

  componentDidMount(){
    document.title="Akhilesh";
  }


  render(){
      return (
        <div style={{background:'linear-gradient(to right, #642b73, #c6426e)',overflow:'hidden',color:'#F4D529'}}>
          <Navigation />
          <FrontPage />
          <About />
        </div>
      );
  }
}

export default App;