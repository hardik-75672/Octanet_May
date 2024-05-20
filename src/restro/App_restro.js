import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Restro from './Restro_main'
import data from './Data.jsx'
import './App.restro.css'


const App1 = () => {
    const [Sdata, setdata] = useState(data);
    const click = (category) => {
        const updatedlist = data.filter((curnt) => {
            return curnt.category === category

        });
        console.log(updatedlist)

        setdata(updatedlist);
    };

    return (
        <>

            <nav className="navbar_restro">

                <ul>
                    <li>hdk</li>
                    <li>hdk</li>
                </ul>
                <ul>
                    <li onClick={() => click("breakfast")} className='list12'>breakfast</li>
                    <li onClick={() => click("dinner")} className='list12'>dinner</li>
                    <li onClick={() => click("lunch")} className='list12'>lunch</li>
                </ul>

            </nav >


            <Restro card={Sdata} />
        </>

    );
}

export default App1;

