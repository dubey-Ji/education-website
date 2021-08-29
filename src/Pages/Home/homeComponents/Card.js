import React from "react";

const Card = () => {
  return (
    <>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <img src="img/JEE-Main-2021.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                <b>JEE</b>
              </h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 pt-4 pt-md-0">
          <div class="card">
            <img src="img/NeetExam.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                <b>NEET</b>
              </h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 pt-4 pt-md-0">
          <div class="card">
            <img src="img/gmat.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                <b>GMAT</b>
              </h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
