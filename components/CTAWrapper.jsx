import React from "react";

const CTAWrapper = () => {
    return (
<section
  className=" space-top sec-bg7"
  data-bg-src="assets/img/bg/cat-bg-4584.jpg"
>
  <div className="container text-center">
    <span className="sub-title4 text-white">Provide 100% Organic?</span>
    <h2 className="sec-title3 text-color2">Organic Food Market</h2>
    <div className="row justify-content-center mb-xl-4 pb-1">
      <div className="col-md-9 col-lg-8 col-xl-6">
        <p className="sec-text text-white">
          Supplying our organic farm shops and restaurants with the freshest
          organic herbs and vegetables from Devon
        </p>
      </div>
    </div>
    <div className="row justify-content-center gy-3 pt-2">
      <div className="col-auto">
        <a href="about.html" className="vs-btn style5">
          Learn More
          <i className="fas fa-angle-right" />
        </a>
      </div>
      <div className="col-auto">
        <a href="tel:+387643932728" className="vs-btn style4">
          <i className="fas fa-phone-alt" />
          +387643932728
        </a>
      </div>
    </div>
  </div>
</section>

    );
};

export default CTAWrapper;
