import React from "react";

const HowItWorks = () => {
    return (
        <section className="  space-top">
        <div
          className="shape-mockup jump-reverse d-none d-xl-block"
          data-right="5%"
          data-bottom="14%"
        >
          <img src="/assets/img/shape/shape-8879.png" alt="shape" />
        </div>
        <div
          className="shape-mockup jump d-none d-xl-block"
          data-right="11.5%"
          data-top="18%"
        >
          <img src="/assets/img/shape/shape-7636.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row gx-80">
            <div className="col-lg-6 col-xl-6 mb-30">
              <div className="img-box6">
                <div className="img-1">
                  <img src="/assets/img/about/ab-10-1.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 mb-30">
              <span className="sub-title4">How it Works?</span>
              <h2 className="sec-title4 mb-4 pb-1">
                Ready to begin your organic adventure?
              </h2>
              <h3 className="text-theme h4 mb-4 pb-1">
                Here’s what you need to know to get started.
              </h3>
              <div className="block-step-list">
                <ol>
                  <li>£12 minimum order + £1.99 delivery charge</li>
                  <li>Change your order up until midnight two days before</li>
                  <li>No commitment – skip or cancel at any time</li>
                  <li>Shop with a tap on our app</li>
                  <li>We’ll deliver to a safe place when you’re out</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
};

export default HowItWorks;
