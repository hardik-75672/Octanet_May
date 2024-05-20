import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App1 from "./App1.js";
// import Digital1 from './Digital';
import Nav from "./nav";
// import Count1 from './Count12.jsx'
// import Myfunc from './click';
import data from "./list.jsx";
// import data from './list'
import Form1 from "./form1.js";
import Form from "./form.js";
import To_do from "./To_Do.js";
import Typed1 from "./Typed1.jsx";
import Chatgpt from "./chatgpt.jsx";

// console.log(data)

const root = ReactDOM.createRoot(document.getElementById("my"));
root.render(
  <>
    {/* <div className="hov"> */}
    {/* <Count1 /> */}
    {/* <Digital1 /> */}
    {/* <Myfunc /> */}
    <To_do />
    {/* </div> */}
    {/* <Nav /> */}
    {/* <Nav /> */}
    {/* <App1 data={data}/> */}
    {/* <Form1 /> */}
    {/* <Form /> */}
    {/* <Typed1/> */}
    {/* <Chatgpt/> */}
  </>
);
