import React from 'react';
// import ReactDOM from  'react-dom/client';
// import {add,sub,mul,div} from './calc'
import './App.css';

const App1=({data})=> {
  return (
    <>
      {data.map((curnt) => {
        return (

          <>

            <div className="card">
              <img src={curnt.imagsrc} alt="imaage nahi he yha pe" className="card-image" height="10" />
              <div className="card-content">
                <br />
                <span className="desc"> 📽️ NETFLIX ORIGINAL SERIES</span>
                <h6 className="card-title">{curnt.title}</h6>
                <a href={curnt.link} src="myfile">
                  <button className="card-button">watch now</button>
                </a>
              </div>
            </div>

          </>
        )
      }
      )
      }
      </>);
}

      export default App1;
