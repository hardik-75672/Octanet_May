import React from 'react'
import ReactDOM from 'react-dom'
// import './gujarti_lunch.jpg'


const Restro = ({card}) => {
    console.log(card)
    return (
        <>
        {card.map((curnt) =>{
            console.log(curnt.title);
         return(<>
                <div>
                    <div className="card" key="curnt">
                        <img src={curnt.imagsrc} alt="imaage nahi he yha pe" className="card-image" height="10" />
                        <div className="card-content">
                            <br />
                            <span className="desc">RESTORRANT FOOD 💁</span>
                            <h6 className="card-title">{curnt.title}</h6>
                            <a href={curnt.link} src="myfile">
                                <button className="card-button">watch now</button>
                            </a>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </> 
            )
        })}

        </>
    )
}

export default Restro;