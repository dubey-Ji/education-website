import React from "react";
import contact from "./img/contact.jpg";
import googleMap from "./img/GoogleMapTA.webp";

const Contact = () => {
  return (
    <>
      <section id="header">
        <img src={contact} class="img-fluid" width="100%" alt="about-us"></img>
      </section>

      <section id="contact">
        <div class="container py-5">
          <div class="row">
            <div class="col-md-6">
              <h1 class="display-1">Get In Touch</h1>
              <div class="contact-info">
                <p>
                  <span class="material-icons"> room </span> 123, Chandra
                  darshan APT, Nallasopara East.
                </p>
                <p>
                  <span class="material-icons"> phone </span> +91-9325112201
                </p>
                <p>
                  <span class="material-icons"> email </span> ashd1014@gmail.com
                </p>
              </div>
              <div class="contact-form">
                <form>
                  <div class="row py-2">
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your full name"
                      />
                    </div>
                    <div class="col">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="email"
                      />
                    </div>
                  </div>
                  <div class="row py-2">
                    <div class="col">
                      <input
                        type="tel"
                        class="form-control"
                        placeholder="phone"
                      />
                    </div>
                    <div class="col">
                      <select id="inputState" class="form-control">
                        <option selected>Course...</option>
                        <option>JEE</option>
                        <option>NEET</option>
                        <option>GMAT</option>
                      </select>
                    </div>
                  </div>
                  <div class="row pt-2 pb-4">
                    <div class="col">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                  </div>
                  <button class="btn btn-outline-primary btn-lg btn-block">
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div class="col-md-6 py-5">
              <img src={googleMap} width="100%" alt="maps"></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
