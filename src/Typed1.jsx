import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter';
// import Typed from 'react-typed'

const Typed1 = () => {
  const {text}=useTypewriter({
    words:['gdhsgdh','dsgdegd','deytr'],
    loop:{},
    // typeSpeed:20,
  });
  return (
  
    <div>
      
      <h2>
        i am ,
        {text}
        <span style={{fontWeight:'bold', color:'red'}}>{text}</span>
        <Cursor/>
      </h2>
  </div>
      );
    };
    
    // export default AnimatedText; }

export default Typed1
