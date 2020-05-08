import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/section.css';
import ScratchCard from 'react-scratchcard';


const ScratchCardSection = (props)=>{

    const settings = {
        height:300,
        width:300,
        image:'https://cdn.shopify.com/s/files/1/0153/0623/products/BW_Striped_Wallpaper_in_Ivory_design_by_BD_Wall_7dc80d01-d0b8-4f49-8288-d86522480399_large.jpg?v=1571709614',
        finishPercent:50,
        onComplete: ()=> console.log('Done') 
    };
    

    return(        
        <ScratchCard {...settings}>
            <img src="https://bleedingcool.com/wp-content/uploads/2019/09/black-batman-630x628.jpg" alt="I am batman" style={{maxHeight:"300px",maxWidth:"300px"}}></img>
        </ScratchCard>
    )

}

export default ScratchCardSection;