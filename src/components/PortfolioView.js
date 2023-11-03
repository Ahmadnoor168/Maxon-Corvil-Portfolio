import React from "react";
import Portfolio from './Portfolio';

function PortfolioView({ portfolio }) {
  return (
    <div className="row mt-30-reverse">
      {portfolio.map(portfolio => (
        <div className="col-lg-4 col-md-6 col-12 mt-30" key={portfolio.id} >
          <Portfolio content={portfolio} />
        </div>
      ))}
    </div>
  );
}

export default PortfolioView;
