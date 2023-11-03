import React from 'react'

const AboutCards = (props) => {
  return (
    <div className="mi-service">
    <span className="mi-service-icon">
      <LineIcon name={props.content.icon} />
    </span>
    <h5>{props.content.title}</h5>
    <p>{props.content.details}</p>
    <br></br>
    <h6>Earned At:</h6>
    <ul>
        {props.content.usedAt.map((location) => (
          <li>{location}</li>
        ))}
     
    </ul>


  </div>
  )
}

export default AboutCards