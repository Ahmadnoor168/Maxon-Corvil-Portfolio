import React from 'react';
import LineIcon from "react-lineicons";

function Service(props) {
  return (
    <div className="mi-service">
      <span className="mi-service-icon">
        <LineIcon name={props.content.icon} />
      </span>
      <h5>{props.content.title}</h5>
      <p>{props.content.details}</p>
      <br></br>
      <h6>From:</h6>
      <ul>
          {props.content.usedAt.map((location) => (
            <li>{location}</li>
          ))}
       
      </ul>


    </div>
  )
}

export default Service;
