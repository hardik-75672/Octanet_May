import React, { useRef, useState } from "react";
import "./To_Do.css";
import To_Do_list from "./To_Do_list.jsx";
import { all } from "axios";

function To_do() {
  const [id, setId] = useState(0);
  const [items, setItems] = useState();
  const [allitems, setAllItems] = useState([]);
  const takeRef = useRef(null);

  const onClick = (event) => {
    // setAllItems(() => {
    setItems("");
    const data = {
      items: items,
      check: 0,
      id: id,
    };
    setId(id + 1);
    const newData = [...allitems, data];
    setAllItems(newData);
    console.log(allitems);
    //   return [...allitems, data];
    // });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("yes i enter in this loop");
      onClick();
    }
  };
  const onChange1 = (event) => {
    setItems(event.target.value);
    // console.log(items)
  };

  const change = (id) => {
    console.log("click");
    console.log(id);
    setAllItems((allitems) => {
      return allitems.filter((arr, index) => {
        return index != id;
      });
    });
  };

  const checkChange = (id) => {
    console.log(id);
    console.log("ppppppppp");
    const mylist = allitems.map((item) =>
      // console.log("jiihhhjhjjh");
      item.id === id ? { ...item, check: item.check ? 0 : 1 } : item
    );
    console.log("llllllll");
    setAllItems(mylist);
  };
  return (
    <>
      <body>
        <div className="main">
          <h3 className="head">Add a Items</h3>
          <div className="main2">
            <input
              className="input"
              type="text"
              placeholder="Enter items"
              onChange={onChange1}
              ref={takeRef}
              onKeyDown={handleKeyDown}
              value={items}
            />
            <button onClick={onClick}>+</button>
          </div>
          <div className="main1">
            <div className="main3">
              {allitems.map((itemval, index) => {
                return (
                  <To_Do_list
                    className="todo"
                    key={itemval.id}
                    id={itemval.id}
                    val={itemval.items}
                    set={change}
                    check={itemval.check}
                    mychange={checkChange}
                  />
                );
              })}

              {/* <To_Do_list/> */}
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default To_do;
