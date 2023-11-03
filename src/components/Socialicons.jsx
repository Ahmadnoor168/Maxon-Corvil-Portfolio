import React, { useState, useEffect } from "react";
import axios from 'axios';
import LineIcon from 'react-lineicons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faGithub, } from '@fortawesome/free-brands-svg-icons'


function Socialicons(props) {
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    axios.get('/api/information')
      .then(response => {
        setSocialLinks(response.data.socialLinks);
      })
  }, [])

  return (
    <ul className="links_ul">
      <li className="linkedin">
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.linkedin}>
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.github}>
            <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" href={socialLinks.portfolio}>
            <FontAwesomeIcon icon={faBriefcase} className="icon"/>
        </a>
      </li>
      {!socialLinks.github ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.github}>
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
        </a>
      </li>}
    </ul>
  );
}

export default Socialicons;
