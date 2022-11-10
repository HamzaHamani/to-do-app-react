import { useState } from "react";
import "./App.css";
import { Form } from "./componenets/form";
import { Lists } from "./componenets/lists";

function App() {
  let dumbarray = [];
  const [dataArray, setDataArray] = useState(dumbarray);
  const [content, iscontent] = useState(false);
  let { id, setIad } = useState("");

  // receiver data and showing it
  // let content;
  // if (dataArray.length == 0) {
  //   content = <p>u need to</p>;
  // }
  // else {
  //   content
  // }
  let returnFunction = (data) => {
    iscontent(true);
    setDataArray((prev) => {
      return [data, ...prev];
    });
  };

  let deleteid = (IDdata) => {
    console.log(IDdata);

    let filteredarray = dataArray.filter((filter) => {
      console.log(filter.id !== IDdata);
      return filter.id !== IDdata;
    });
    setDataArray(filteredarray);
  };
  return (
    <div className="Container">
      <Form onrReturn={returnFunction} />
      <div className="listsallContainer">
        {!content ? (
          <p className="p">u need to add something</p>
        ) : (
          <Lists items={dataArray} Onrecieve={deleteid} />
        )}
      </div>
    </div>
  );
}

export default App;
