import React from "react";
import heroImg from "../img/undraw_education_f8ru.svg";

const HeroSection = () => {
  return (
    <>
      <div class="container my-md-5 my-2 py-md-5">
        <div class="row">
          <div class="col-md-5">
            <img src={heroImg} class="img-fluid" alt="" />
          </div>
          <div class="col-md-7">
            <h2 class="display-2">
              <b>
                One stop for
                <span style={{ color: "blue" }}>
                  smar<span style={{ color: "green" }}>t</span>{" "}
                </span>
                studies
              </b>
            </h2>
            <h6 class="display-4"></h6>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt, cupiditate. Minus perspiciatis quos voluptates fuga
              natus aut iste doloribus porro?
            </p>
            <a href="./pages/about.html">
              <button class="btn btn-primary">About Us</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
