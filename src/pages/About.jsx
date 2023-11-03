import axios from "axios";
import FsLightbox from "fslightbox-react";
import React, {  useEffect, useState } from "react";
import * as Icon from "react-feather";
import { Helmet } from "react-helmet";
import ProgressiveImage from "react-progressive-image";
import Slider from "react-slick";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import AboutCards from "../components/AboutCards";

function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const [softSkills, setSoftSkills] = useState([]);
  const [awards, setAwards] = useState([]);
  const [groups, setGroups] = useState([]);
  const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleToggler = (event) => {
    setToggler(!toggler);
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
    axios.get("/api/groups").then((response) => {
      setGroups(response.data);
    });
    axios.get("/api/awards").then((response) => {
      setAwards(response.data);
    });
    axios.get("/api/softskills").then((response) => {
      setSoftSkills(response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>About - Maxon Corvil</title>
        <meta
          name="description"
          content="Learn about Maxon Corvil"
        />
      </Helmet>
   
        <div className="mi-about-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="About Me" />
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="mi-about-image">
                  <ProgressiveImage
                    src={information.aboutImage}
                    placeholder="/images/about-image-placeholder.png"
                  >
                    {(src) => (
                      <img
                        src={src}
                        alt="aboutimage"
                        onClick={() => handleToggler(!toggler)}
                      />
                    )}
                  </ProgressiveImage>
                  <span className="mi-about-image-icon">
                    <Icon.ZoomIn />
                  </span>
                  <FsLightbox
                    toggler={toggler}
                    sources={[information.aboutImageLg]}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mi-about-content">
                  <h3>
                    Full Name:  <span className="color-theme">{information.name}</span>
                  </h3>
                  <p>
                    A Highly motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I am able to use my skills to the advantage of the company while having the opportunity to develop my own skills and grow with the company. Overall, I am
                    seeking opportunities to utilize my software engineering skills in the creation of meaningful software applications.
                  </p>
                  <ul>
                    {!information.age ? null : (
                      <li>
                        <b>Age</b> {information.age} Years
                      </li>
                    )}
                    {!information.phone ? null : (
                      <li>
                        <b>Phone</b> {information.phone}
                      </li>
                    )}
                    {!information.nationality ? null : (
                      <li>
                        <b>Nationality</b> {information.nationality}
                      </li>
                    )}
                    {!information.language ? null : (
                      <li>
                        <b>Languages</b> {information.language}
                      </li>
                    )}
                    {!information.email ? null : (
                      <li>
                        <b>Email</b> {information.email}
                      </li>
                    )}
                    {!information.location ? null : (
                      <li>
                        <b>Location</b> {information.location}
                      </li>
                    )}
                    {!information.freelanceStatus ? null : (
                      <li>
                        <b>Freelance</b> {information.freelanceStatus}
                      </li>
                    )}
                  </ul>
                  <a href={information.cvfile} className="mi-button" target="_blank">
                    Download CV as PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mi-service-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="Soft Skills" />
            <div className="mi-service-wrapper">
              <div className="row mt-30-reverse">
                {softSkills.map((skill) => (
                  <div
                    className="col-lg-4 col-md-6 col-12 mt-30"
                    key={skill.title}
                  >
                    <Service content={skill} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Awards" />
              <div className="mi-service-wrapper">
                <div className="row mt-30-reverse">
                  {awards.map((award) => (
                    <div
                      className="col-lg-4 col-md-6 col-12 mt-30"
                      key={award.title}
                    >
                      <Service content={award} />
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
        <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Groups" />
              <div className="mi-service-wrapper">
                <div className="row mt-30-reverse">
                  {groups.map((group) => (
                    <div
                      className="col-lg-4 col-md-6 col-12 mt-30"
                      key={group.title}
                    >
                      <Service content={group} />
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>

    </Layout>
  );
}

export default About;
