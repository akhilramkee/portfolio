import React from 'react';
import { Row,
    Col,
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/profile.scss';
import Typical from 'react-typical';
import { FaChevronDown } from 'react-icons/fa';

const FrontPage = ({props})=>{


    return(
        <div style={{height:'100vh',paddingTop:'25vh'}}>
           <Row style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',background:'linear-gradient(to right, #d38312, #a83279)',marginLeft:'3%',marginRight:'3%'}}>
                <Col>
                    <div className="container1">
                        <div className="box">
                            <div className="spin-container">
                            <div className="shape">
                                <div className="bd"></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <Row style={{alignItems:'center', textAlign:'center',fontSize:'6vw'}}>
                        <Col sm={{ size: 8, order: 1, offset: 1 }}>AKHILESH</Col>
                    </Row>
                    <Row style={{textAlign:'center',fontSize:'4vw'}}>
                        <Col sm={{ size: 8, order:1, offset: 1}}><Typical
                            steps={['Programmer',1000,'Nerd',1000,'Otaku',1000]}
                            loop={Infinity}
                            wrapper="p"
                            />
                        </Col>
                    </Row>
                </Col>
           </Row>
           <div className="arrow bounce">
               <FaChevronDown size={32} onClick={()=>{window.scrollTo({top:window.innerHeight+100,left:0,behavior:'smooth'});}}/>
            </div>        
        </div>
    );


}

export default FrontPage;