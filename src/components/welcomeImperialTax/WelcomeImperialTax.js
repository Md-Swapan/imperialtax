import React from "react";
import "./WelcomeImperialTax.css";

const WelcomeImperialTax = () => {
  return (
    <div className="welcomeImperialTax_container">
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6">
            <div className="">
              <h4>Welcome to Imperial Tax</h4>
              <p>
                Imperial provides you peace of mind providing best accounting,
                auditing, income tax and consultation services year-round either
                physical or virtual.
              </p>
              <p>
                We are specialized in minimizing your personal taxes and
                corporate tax liabilities and professionally defending your
                income tax, payroll and HST related CRA audit to save your
                hard-earned money.
              </p>
              <button type="submit" class="btn btn-primary px-4">
                Read More
              </button>
            </div>
          </div>
          <div className="col-md-6">
            {/* <div className="contact_right_container">
              <video style={{ width: "400" }} controls>
                <source src="https://vimeo.com/36031564" type="video/mp4" />
                <source src="mov_bbb.ogg" type="video/ogg" />
                Your browser does not support HTML video.
              </video>
            </div> */}
            <div class="col-md-6 animate fadeInRight animate-it animated">
              <div class="video-widget">
                <img
                  src="https://imperialtax.ca/wp-content/uploads/2016/06/video-thumb.jpg"
                  class="img-shadow"
                  alt=""
                />
                <a href="http://vimeo.com/36031564" class="fancybox-media">
                  <i class="fa fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeImperialTax;
