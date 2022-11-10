import { useState } from "react";
import "./form.css";

let Form = function (props) {
  const [isValid, setIsValid] = useState(true);
  const [textValue, setTextValue] = useState("");
  let change = (e) => {
    // console.log(e.target.value);
    setTextValue(e.target.value);
    setIsValid(true);
  };
  let submitForm = (e) => {
    e.preventDefault();
    if (textValue.length == 0) {
      setIsValid(false);
      return;
    }
    setTextValue("");
    let items = {
      id: Math.random() * 1000,
      text: textValue,
    };
    props.onrReturn(items);
  };

  return (
    <form
      onSubmit={submitForm}
      className={`formContainer ${!isValid ? "invalid" : ""}`}
    >
      <h2>
        What's the Plan for <span className="ligne">Today</span>?
      </h2>
      <div>
        <input
          onChange={change}
          type="text"
          value={textValue}
          placeholder={`${
            isValid ? "What's on your mind" : "You need to type something"
          }`}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export { Form };
