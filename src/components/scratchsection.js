import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/section.css';
import {
    Row,
    Col
} from 'reactstrap';
import ScratchCard from 'react-scratchcard';


const ScratchCardSection = (props)=>{

    const settings = {
        image:'https://i.imgur.com/7iIDXXr.jpg',
        finishPercent:50,
        onComplete: ()=> console.log('Done') 
    };
    

    return(
        <div className="section-body">
            <div className="h-100 w-100 d-inline-block" style={{backgroundColor:"rgba(255,0,0)"}}>
                <Row style={{marginTop:'10%',alignContent:"center",justifyItems:"center"}}>
                    <Col>
                        <ScratchCard {...settings}>
                            <img src="https://i.imgur.com/7iIDXXr.jpg" alt="I am batman" style={{maxHeight:"100%",maxWidth:"100%"}}></img>
                        </ScratchCard>
                    </Col>
                    <Col>
                        <ScratchCard {...settings}>
                            <img src="https://i.imgur.com/7iIDXXr.jpg" alt="I am batman" style={{maxHeight:"100%",maxWidth:"100%"}}></img>                            
                        </ScratchCard>
                    </Col>
                    <Col>
                        <ScratchCard {...settings}>
                            <img src="https://i.imgur.com/7iIDXXr.jpg" alt="I am batman" style={{maxHeight:"100%",maxWidth:"100%"}}></img>                            
                        </ScratchCard>
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default ScratchCardSection;