import Markdown from "markdown-to-jsx";
import React, {  useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

function BlogDetails(props) {
  const params = useParams();
  const [content, setContent] = useState("");
  const blogId = params.id;
  const blogFile = params.title;
  const fileName = `${blogFile}.md`;

  useEffect(() => {
    import(`../blog/${fileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setContent(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  return (
    <Layout>
      <Helmet>
        <title>Blog Details - Chester React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template Blog Details Page"
        />
      </Helmet>
   
        <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Markdown>{content}</Markdown>
          
              <div className="mi-blog-details-comments mt-30">
              </div>

          </div>
        </div>
  
    </Layout>
  );
}

export default BlogDetails;
