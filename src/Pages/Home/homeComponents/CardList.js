import React from "react";
import Card from "./Card";

const CardList = () => {
  return (
    <>
      <section id="courses">
        <div class="container my-5">
          <h1 class="text-center">
            <b>Courses</b>
          </h1>
          <h6 class="text-center mb-4">
            <a href="./pages/courses.html">
              <b style={{ text_decoration: "underline" }}>View details</b> ->
            </a>
          </h6>
          <Card />
        </div>
      </section>
    </>
  );
};

export default CardList;
