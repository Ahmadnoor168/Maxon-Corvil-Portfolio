import axios from "axios";
import React, {  useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import TrackVisibility from "react-on-screen";
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Resume from "../components/Resume";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from "../components/Smalltitle";

function Resumes() {
  const [skills, setSkills] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() => {
    axios.get("/api/skills").then((response) => {
      setSkills(response.data);
    });
    axios.get("/api/experience").then((response) => {
      setWorkingExperience(response.data.workingExperience);
      setEducationExperience(response.data.educationExperience);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Resume - Chester React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template Resume Page"
        />
      </Helmet>
      <div className="container">
        <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Resume" />
            <Smalltitle title="Working Experience" icon="briefcase" />
            <div className="mi-resume-wrapper">
              {workingExperience.map((workingExp) => (
                <Resume key={workingExp.id} resumeData={workingExp} />
              ))}
            </div>
            <div className="mt-30"></div>
            <Smalltitle title="Educational Qualifications" icon="book" />
            <div className="mi-resume-wrapper">
              {educationExperience.map((educatonExp) => (
                <Resume key={educatonExp.id} resumeData={educatonExp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
