import React from 'react'
import ProgressiveImage from 'react-progressive-image';
import LineIcon from "react-lineicons";

const SkillCard = ({ skill }) => {
  console.log(skill)
  return (
    <div className="skill_Card">
      <div className="face face1">
        <div className="content">
          <span className="mi-service-icon">
            <LineIcon name='react' />
          </span>
          <h3>
            {skill.title}
          </h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p>
            Experience: {skill.years} Years
          </p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard