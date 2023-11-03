import React, {  useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import SkillCard from "../components/SkillCard"

const Skills = () => {
  const [mySkills, setMySkills] = useState([]);
  useEffect(() => {
    axios.get("/api/myskills").then((response) => {
      setMySkills(response.data);
    });
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>Resume -Skills List</title>
        <meta
          name="description"
          content="Maxon Corvil Skills Page"
        />
      </Helmet>
      <div className=" mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="Skills" />
            <div className="">
              <div className="card_Container ">
                {mySkills.map((skill) => (
                  <div key={skill.title}>
                    <SkillCard skill={skill}/>
                  </div>
                ))}
              </div>
            </div>
 
          </div>
        </div>
    </Layout>
  )
}

export default Skills