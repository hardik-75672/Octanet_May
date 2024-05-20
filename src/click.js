import React, { useState } from 'react';
import './click.css'

function Myfunc() {
// const bg='purple';
// const text='CLICK';
const [bg,setbg]=useState('purple');
const [text,settext]=useState('CLICK');
const setbg1=()=>{
    setbg('red');
}

const settext1=()=>{
    settext('ouchh! 😢')
}

const dbclk=()=>{
    settext('why 😱');
    setbg('blue')
}
    return (
        <>
            <div onClick={setbg1} className="hhh" style={{backgroundColor: bg}} onDoubleClick={dbclk} >
                <button onClick={settext1} className='ccc'>{text}</button>
            </div>
        </>
    );
}

export default Myfunc;