import React from 'react';
import Navigation from './components/nav.js';
import FrontPage from './components/firstPage.js';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <div style={{backgroundColor:'#282828',overflow:'hidden',color:'#F4D529'}}>
      <Navigation />
      <FrontPage />
    </div>
  );
}

export default App;
