import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Contact = () => {

    return (
        <section className="vs-contact-wrapper vs-contact-layout1 space-top space-md-bottom">
  <div className="container">
    <div className="row text-center text-lg-start">
      <div className="col-lg-6 ">
        <div className="section-title mb-25">
          <h2 className="sec-title1">Address</h2>
          <h3 className="sec-title2">Information</h3>
          <img src="assets/img/icons/sec-icon-1.png" alt="Section Image" />
          <p className=" fs-md mt-4 pt-1">
            Donec sed laoreet odio. Quisque sollicitudin vestibulum ultrices.
            Nulla pellentesque odio eget urna venenatis, ac maximus diam auctor.
            Phasellus aliquam neque non sodales lacinia.
          </p>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h4>Colourbar U.S.A</h4>
            <p className="mb-0 fw-semibold">
              Dhaka In Twin Tower Concord Shopping Complex
            </p>
            <p className="mb-0 fw-semibold">Open Closes 8:30PM</p>
            <p className="mb-0 fw-semibold">yourinfo@example.com</p>
            <p className="mb-0 fw-semibold">(1200)-0989-568-331</p>
          </div>
          <div className="col-sm-6 mb-20">
            <h4>Frankfurt D.E</h4>
            <p className="mb-0 fw-semibold">
              Bayreuther Strasse 42 Protective Service Occupations
            </p>
            <p className="mb-0 fw-semibold">Open Closes 8:30PM</p>
            <p className="mb-0 fw-semibold">yourinfo@example.com</p>
            <p className="mb-0 fw-semibold">(1200)-0989-568-331</p>
          </div>
          <div className="col-sm-6">
            <h4>Uusimaa ESPOO</h4>
            <p className="mb-0 fw-semibold">
              Snellmaninkatu 33 02720 Shopping Complex
            </p>
            <p className="mb-0 fw-semibold">Open Closes 8:30PM</p>
            <p className="mb-0 fw-semibold">yourinfo@example.com</p>
            <p className="mb-0 fw-semibold">(1200)-0989-568-331</p>
          </div>
          <div className="col-sm-6 mb-20">
            <h4>Queensland U.S.A</h4>
            <p className="mb-0 fw-semibold">
              35 Ocean Pde sollicitudin Protective Service Occupations
            </p>
            <p className="mb-0 fw-semibold">Open Closes 8:30PM</p>
            <p className="mb-0 fw-semibold">yourinfo@example.com</p>
            <p className="mb-0 fw-semibold">(1200)-0989-568-331</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-30 mt-lg-0">
        <div className="section-title mb-25">
          <h2 className="sec-title1">Get In Touch</h2>
          <h3 className="sec-title2">Inform Us</h3>
          <img src="assets/img/icons/sec-icon-1.png" alt="Section Image" />
          <p className="fs-md mt-4 pt-1">
            Donec sed laoreet odio. Quisque sollicitudin vestibulum ultrices.
            Nulla pellentesque odio eget urna venenatis, ac maximus diam auctor.
            Phasellus aliquam neque non sodales lacinia.
          </p>
        </div>
        <form
          action="mail.php"
          method="POST"
          className="contact-form contact-form1 mb-30"
        >
          <div className="row g-4">
            <div className="col-12 form-group mb-0">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="col-lg-6 form-group mb-0">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
            <div className="col-lg-6 form-group mb-0">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Your Subject"
              />
            </div>
            <div className="col-12 form-group mb-0">
              <textarea
                className="form-control"
                name="message"
                placeholder="Your Message"
                defaultValue={""}
              />
            </div>
            <div className="col-12 form-group mb-0">
              <button type="submit" className="vs-btn ">
                Send Message
              </button>
            </div>
          </div>
        </form>
        <p className="form-messages mt-20 mb-0" />
      </div>
      <div className="col-12 my-30">
        <div className="ratio ratio-21x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583088354!2d-74.11976389828038!3d40.697663748695746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1613227685674!5m2!1sen!2sbd"
            height={500}
            style={{ border: 0, margin: 0 }}
            allowFullScreen=""
            aria-hidden="false"
          />
        </div>
      </div>
    </div>
  </div>
</section>

    );
}
export default Contact