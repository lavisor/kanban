import { Children } from "react";
import "./Card.scss";

function Card(props) {
  return (
    <>
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>{props.title}</h2>
          </div>
          {props.children}
        </div>
      </div>
    </>
  );
}

export default Card;
