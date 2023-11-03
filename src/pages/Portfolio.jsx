import axios from "axios";
import React, {  useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import PortfolioView from "../components/PortfolioView";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";

function Portfolio() {
  const [portfolio, setPortfoio] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [portfolioPerPage] = useState(9);

  useEffect(() => {
    let mounted = true;
    axios.get("/api/portfolio").then((response) => {
      if (mounted) {
        setPortfoio(response.data);
      }
    });
    return () => (mounted = false);
  }, []);

  const indexOfLastPortfolio = currentPage * portfolioPerPage;
  const indexOfFirstPortfolio = indexOfLastPortfolio - portfolioPerPage;
  const currentPortfolio = portfolio.slice(
    indexOfFirstPortfolio,
    indexOfLastPortfolio
  );

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Helmet>
        <title>Portfolio - Chester React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template Portfolio Page"
        />
      </Helmet>
      <>
        <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Portfolio" />
            {<PortfolioView portfolio={currentPortfolio} />}
            {!(portfolio.length > portfolioPerPage) ? null : (
              <Pagination
                className="mt-50"
                itemsPerPage={portfolioPerPage}
                totalItems={portfolio.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
        </>
    </Layout>
  );
}

export default Portfolio;
