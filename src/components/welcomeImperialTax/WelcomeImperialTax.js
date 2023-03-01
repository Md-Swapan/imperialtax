import React from "react";
import "./WelcomeImperialTax.css";

const WelcomeImperialTax = () => {
  return (
    <div className="welcomeImperialTax_container">
      <div className="container">
        <div className="row py-5">
          <h4 className="text-center">Imperial Tax</h4>
          <div className="d-flex justify-content-center align-items-center">
            <hr className="w-25" />
          </div>
          <div className="col-sm-12 col-md-6 p-3">
            <h4 className="mt-4 py-3">Welcome to Imperial Tax</h4>
            <p>
              Imperial provides you peace of mind providing best accounting,
              auditing, income tax and consultation services year-round either
              physical or virtual.
            </p>
            <p>
              We are specialized in minimizing your personal taxes and corporate
              tax liabilities and professionally defending your income tax,
              payroll and HST related CRA audit to save your hard-earned money.
            </p>
            <button type="submit" class="btn btn-primary">
              Read More
            </button>
          </div>
          <div className="col-sm-12 col-md-6 p-3">
            <img
              src="https://imperialtax.ca/wp-content/uploads/2016/06/video-thumb.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeImperialTax;
