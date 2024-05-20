import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';


function Digital1() {
    let newDate = new Date();
    let newTime = newDate.getSeconds();
    let [Time, setTime] = useState(newTime);


    let To = () => {
        let newTime = newDate.getSeconds();

        setTime(newTime)
        console.log(Time)

    }

    setInterval(To, 2000);


    return (
        <>
            <h1 className='kl'>{Time}</h1>
            {/* <button onClick={t}>{newTime}</button> */}
        </>
    );
}

export default Digital1;
