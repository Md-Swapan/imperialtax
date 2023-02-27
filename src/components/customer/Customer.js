import React from "react";
import "./Customer.css";

const Customer = () => {
  return (
    <div className="customer_container">
      <div className="text-center">
        <h5>HAPPY CUSTOMERS</h5>
        <p>
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADI PISI CING ELIT, SED DO
          EIUSMOD TEMPOR EXERCITATIONEMUT LABORE.
        </p>
      </div>

      <div className="container">
        <div class="row">
          <div class="col-md-6">
            <div class="testimonial animate fadeInUp animate-it animated">
              <div class="testimonial-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adi pisi cing elit,
                  sed do eiusmod tempor exercitationemut labore Love life’s
                  sweetest.
                </p>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="testimonials-author">
                    <img
                      src="https://imperialtax.ca/wp-content/uploads/2016/07/review-author-img.png"
                      class="img-circle wp-post-image"
                      alt=""
                    />
                    <p>
                      John Smith<span>(Sales Agent)</span>
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="text-right">
                    <ul class="rating">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="testimonial animate fadeInUp animate-it animated">
              <div class="testimonial-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adi pisi cing elit,
                  sed do eiusmod tempor exercitationemut labore Love life’s
                  sweetest.
                </p>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="testimonials-author">
                    <img
                      width="63"
                      height="63"
                      src="https://imperialtax.ca/wp-content/uploads/2016/07/review-author-img.png"
                      class="img-circle wp-post-image"
                      alt=""
                    />
                    <p>
                      Mark<span>(Sales Agent)</span>
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="text-right">
                    <ul class="rating">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
