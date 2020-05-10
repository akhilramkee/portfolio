import React,{Suspense, lazy} from 'react';
import Navigation from './components/nav.js';
import FrontPage from './components/firstPage.js';
import 'bootstrap/dist/css/bootstrap.css';
import About from './components/about.js';
import Skills from './components/skills.js';

const Journey = lazy(()=>import('./components/journey.js'));


class App extends React.Component{

  componentDidMount(){
    document.title="Akhilesh";
  }


  render(){
      return (
        <div style={{background:'linear-gradient(to right, #6441a5, #2a0845)',color:'#F4D529'}}>
          <Navigation />
          <FrontPage />
          <About />
          <Suspense fallback={<div className="lazy"></div>}>
            <Journey />
            <Skills />
          </Suspense>
        </div>
      );
  }
}

export default App;
