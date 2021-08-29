import React from "react";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-4">
              <h2>BrandLogo</h2>
              <hr />
              <h4>Address</h4>
              <address>
                Chandra Darshan APT, Behind Jain temple
                <br />
                Nallasopara east.
              </address>
            </div>
            <div className="col-md-4 px-md-5">
              <h4>Contact</h4>
              <p>
                <b>E-mail:</b>
                ashd1014@gmail.com
              </p>
              <p>
                <b>Tel:</b> +91-9325112201
              </p>
            </div>
            <div className="col-md-4">
              <h4>Follow</h4>
              <hr />
              <p className="icons">
                <span className="material-icons"> language </span>
                <span className="material-icons"> facebook </span>
                <span className="material-icons"> email </span>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="container pb-3">
          <div className="row">
            <div className="col-12 text-center">
              <h6>
                All copy right reserved | Made and Developed with love by
                Ashutosh Dubey
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
