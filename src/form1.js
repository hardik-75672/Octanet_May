import React, { useState } from 'react'
import './form.css'

const Form1 = () => {
    const [name, setname] = useState({
        fname: "",
        lname: "",
    })
    // const [fullname, setfullname] = useState()


    const change = (event) => {
        setname(event.target.value)
        // console.log("clecked")
        setname((preval) => {
            const name=event.target.name;
            const value=event.target.value;
            if (name=="fname"){
                return{
                    fname:value,
                    lname:preval.value,
                }
            }else if(name=="lname"){
                return{
                    fname:preval.value,
                    lname:value,
                }
            }

        })


    };

    const onsubmit = (event) => {
        event.preventDefault();
        // setfullname(name)

    };
    return (
        <>
            <form className='form' onsubmit={onsubmit}>
                <h1>
                    Hello {name.fname} {name.lname}
                </h1>
                <input className='input1'
                    name='fname'
                    type='text'
                    placeholder='Enter Name'
                    onChange={change}
                    value={name.fname}
                >
                </input><input className='input1'
                    name='lname'
                    type='text'
                    placeholder='Enter Name'
                    onChange={change}
                    value={name.lname}
                >
                </input>
                <input
                    type="submit"
                    onClick={onsubmit}></input>
            </form>
        </>
    )
}

export default Form1;