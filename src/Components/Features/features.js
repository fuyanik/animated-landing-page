import PingButton from "./pingButton";

import Navbar from '../1.Navbar/navbar.js';
import featuresArrow from "./images/arrow.png";
import { useState, useEffect } from "react";

const Features = () => { 

  const [imageIndex, setImageIndex] = useState(0);
  
return (
  <div className="product-featuress">
   
    <img src = {imageIndex == 0 ? require('./images/car1.png') :
                imageIndex == 1 ? require('./images/car8.png') :
                imageIndex == 2 ? require('./images/home.png') : ""
             
    
    } className="App-logo" alt="logo" />
   
    <img src={featuresArrow} className="features-arrow-right" alt="logo" 
    onClick={() =>  imageIndex === 2 ? setImageIndex(0) : setImageIndex(imageIndex + 1)    }   
   />
   
    <img src={featuresArrow} className="features-arrow-left" alt="logo"
    onClick={() => imageIndex === 0  ? null : setImageIndex(imageIndex - 1) }
    
    />
    

    <PingButton
     top={
      imageIndex === 0  ?  "162vh" : 
      imageIndex === 1  ?  "177vh" :
      imageIndex === 2  ?  "152vh" : ""
       } 
      
     left={ 
      imageIndex === 0  ?  "66.5vw" : 
      imageIndex === 1  ?  "27vw" :
      imageIndex === 2  ?  "75vw" : ""
      } />


<PingButton
     top={
      imageIndex === 0  ?  "133vh" : 
      imageIndex === 1  ?  "128vh" :
      imageIndex === 2  ?  "142vh" : ""
      } 
      
     left={ 
      imageIndex === 0  ?  "50vw" : 
      imageIndex === 1  ?  "42vw" :
      imageIndex === 2  ?  "52vw" : ""
      } />



<PingButton
     top={
      imageIndex === 0  ?  "153vh" : 
      imageIndex === 1  ?  "156vh" :
      imageIndex === 2  ?  "133vh" : ""
      } 
      
     left={ 
      imageIndex === 0  ?  "29vw" : 
      imageIndex === 1  ?  "58vw" :
      imageIndex === 2  ?  "12vw" : ""
      } />
  
  
  
     


  
  </div>
);

}

export default Features;