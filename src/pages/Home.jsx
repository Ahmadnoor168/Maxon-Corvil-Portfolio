import axios from "axios";
import React, {  useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Particle from "../components/Particle";
import Socialicons from "../components/Socialicons";
import HomeBackground from "../components/HomeBackground";

function Home({ lightMode }) {
  console.log("lightMode",lightMode)
  const [information, setInformation] = useState("");

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Home - Maxon Corvil Personal Portfolio</title>
        <meta
          name="description"
          content="Maxon Corvil React Personal Portfolio Homepage"
        />
      </Helmet>
    
        <div className="mi-home-area mi-padding-section">
          <HomeBackground/>
          <Particle />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-12">
                <div className="mi-home-content">
                  <h1>
                    Welcome, My name is
                    <span className="color-theme ">{information.name}</span>
                  </h1>
                  <p>{information.aboutContent}</p>
                  <Socialicons bordered />
                </div>
              </div>
            </div>
          </div>
        </div>

    </Layout>
  );
}

export default Home;
