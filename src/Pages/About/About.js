import React from "react";
import Slider1 from "./img/abt1.jpg";
import Slider2 from "./img/slider-2.jpg";
import f1 from "./img/f1.jpg";
import f2 from "./img/f2.jpg";
import f3 from "./img/f3.jpg";
import aboutUs from "./img/about-us.jpg";

const About = () => {
  return (
    <>
      <section id="header">
        <img src={aboutUs} class="img-fluid" width="100%" alt="about-us"></img>
      </section>
      <section id="aboutUs">
        <div class="container py-5">
          <div class="row">
            <div class="col-12">
              <h2 class="text-center">About Us</h2>
              <div class="title-border">
                <span></span>
              </div>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="col-md-4 pt-5">
              <div
                id="abt-carousel"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={Slider1} class="d-block w-100" alt="..."></img>
                  </div>
                  <div class="carousel-item">
                    <img src={Slider2} class="d-block w-100" alt="..."></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card" style={{ width: "100%" }}>
                <div class="card-body">
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam aliquid iure quaerat libero minima, quibusdam soluta
                    velit, quae ut minus possimus sequi error, non veritatis!
                    Dicta nemo deserunt dolore iste fugiat inventore facilis,
                    aperiam dolorum ab animi? Rerum, cupiditate sed?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="highlight">
        <div class="container-fluid py-5">
          <div class="row">
            <div class="col-12">
              <h2 class="text-center">Highlight</h2>
              <div class="title-border">
                <span></span>
              </div>
            </div>
          </div>
          <div class="row justify-content-md-around">
            <div class="col-12 col-md-4 text-center box">
              <img src={f1} alt="" />
              <h4>Well-Curated study material</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores dignissimos eligendi, laboriosam consequuntur dolorem
                aperiam.
              </p>
            </div>
            <div class="col-12 col-md-4 text-center py-2 box">
              <img src={f2} alt="" />
              <h4>Experienced faculty</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                ad possimus adipisci dolores iure tenetur.
              </p>
            </div>
            <div class="col-12 col-md-4 text-center pb-2 box">
              <img src={f3} alt="" />
              <h4>Tests & assessment</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, explicabo quae minus consequuntur dignissimos impedit?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
