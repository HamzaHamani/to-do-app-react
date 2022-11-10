import "./lists.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
let Lists = function (props) {
  // console.log(props.items);
  let delaete = function (data) {
    props.Onrecieve(data);
  };

  return props.items.map((item) => {
    return (
      <div key={item.id} className="listsContainer">
        <h2>{item.text}</h2>
        <div className="iconContainer">
          <div>
            <AiFillDelete onClick={() => delaete(item.id)} />
          </div>
        </div>
      </div>
    );
  });
};
export { Lists };
