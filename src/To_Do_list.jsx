import React, { PureComponent } from 'react'
import './To_Do.css'
import check from "./check.png"
import square from "./square.png"
import cancel from "./cancel.png"

const To_Do_list = (props) => {
    
    return (
        <>
            <ul className="lo">
                <span className="lp" onClick={()=>{props.mychange(props.id)}} id={props.id}>{!props.check ? <img src={square} width={20}></img>: <img src={check} width={22}></img>} </span>
                <li>{props.val}</li>
                &nbsp;
                <span className="lp" onClick={()=>{props.set(props.id)}} id={props.id}><img src={cancel} width={22}></img> </span>

                <br />
            </ul >

        </>
    )
}

export default To_Do_list;