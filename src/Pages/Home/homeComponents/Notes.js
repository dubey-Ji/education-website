import React from "react";
import notesImg from "../img/undraw_Working_oh83.svg";

const Notes = () => {
  return (
    <>
      <section id="notes">
        <div class="container">
          <div class="row my-5 py-5">
            <div class="col-md-7">
              <h2 class="display-3">
                <b>
                  Smart materials for every{" "}
                  <span style={{ color: "green" }}>C</span>
                  <span style={{ color: "blue" }}>lass</span> and
                  <span style={{ color: "blue" }}>s</span>
                  <span style={{ color: "green" }}>t</span>
                  <span style={{ color: "blue" }}>andards</span>
                </b>
              </h2>
              <h6 class="display-4"></h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt, cupiditate. Minus perspiciatis quos voluptates fuga
                natus aut iste doloribus porro?
              </p>
            </div>
            <div class="col-md-5">
              <img src={notesImg} class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notes;
