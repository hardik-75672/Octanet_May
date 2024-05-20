import React, { useState } from 'react'
import './form.css'

const Form = () => {
    const [name, setname] = useState()
    const [fullname, setfullname] = useState()


    const change = (event) => {
        setname(event.target.value)
        // console.log("clecked")

    };

    const onsubmit = (event) => {
        event.preventDefault();
        setfullname(name)

    };
    return (
        <>
            <form className='form' >
                <h1>
                    Hello {fullname}
                </h1>
                <input className='input1'
                    name='fname'
                    type='text'
                    placeholder='Enter Name'
                    onChange={change}
                    value={name}
                >
                </input><input className='input1'
                    name='lname'
                    type='text'
                    placeholder='Enter Name'
                    onChange={change}
                    value={name}
                >
                </input>
                <input
                    type="submit"
                    onClick={onsubmit}></input>
            </form>
        </>
    )
}

export default Form;