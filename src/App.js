import React from 'react';
import Navigation from './components/nav.js';
import { Row,
         Col,
       } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ScratchCardSection from './components/scratchsection.js';
import Typical from 'react-typical';


function App() {
  return (
    <div style={{backgroundColor:'#282828',overflow:'hidden',color:'#F4D529'}}>
      <Navigation />
      <div  style={{height:'100vh',paddingTop:'10%'}}>
          <Row style={{alignItems:'center', textAlign:'center',fontSize:'64px'}}>
            <Col sm={{ size: 7, order: 1, offset: 2 }}>AKHILESH</Col>
          </Row>
          <Row style={{textAlign:'center',fontSize:'64px'}}>
          <Col sm={{ size:7, order:1, offset: 2}}><Typical
                  steps={['A Programmer',1000,'A Nerd',1000,'An Otaku',1000,'A Floor Guy!!',1000]}
                  loop={Infinity}
                  wrapper="p"
            />
            </Col>
          </Row>
      </div>
    </div>
  );
}

export default App;
