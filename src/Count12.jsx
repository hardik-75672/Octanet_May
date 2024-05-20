import React, { useState } from 'react';
import './Count12.css';


const Count1 = () => {
    // let count=0;

    // const state = useState();

    const [count, setCount] = useState(0);
    



    const clk = () => {
        setCount(count + 1);
      
    }
    return (
        <>
            <h1 className='a'>{count}</h1>
            <button className="b" onClick={clk}>Click</button>
        </>
    );

}

export default Count1;
