import React from "react";

const Testimonial = () => {
  return (
    <>
      <section id="testimonials">
        <div class="container py-5">
          <div class="row">
            <div class="col-12">
              <h2 class="display-4 text-center">Testimonials</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 text-center">
              <div
                id="carouselExampleFade"
                class="carousel slide carousel-fade"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="img/avatar.png" width="53px" alt="..." />
                    <h4>Harshit Jain</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Minima assumenda praesentium itaque! Eos illo perspiciatis
                      veritatis repudiandae vero doloremque, ea aliquam laborum
                      officiis rerum accusamus voluptates numquam,
                      exercitationem architecto, quam praesentium itaque
                      deserunt nesciunt. Obcaecati nobis minus iste ullam,
                      expedita in inventore reprehenderit id, provident ducimus
                      officiis recusandae numquam molestiae?
                    </p>
                  </div>
                  <div class="carousel-item">
                    <img src="img/avatar.png" width="53px" alt="..." />
                    <h4>Mohit Sharma</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Minima assumenda praesentium itaque! Eos illo perspiciatis
                      veritatis repudiandae vero doloremque, ea aliquam laborum
                      officiis rerum accusamus voluptates numquam,
                      exercitationem architecto, quam praesentium itaque
                      deserunt nesciunt. Obcaecati nobis minus iste ullam,
                      expedita in inventore reprehenderit id, provident ducimus
                      officiis recusandae numquam molestiae?
                    </p>
                  </div>
                  <div class="carousel-item">
                    <img src="img/avatar.png" width="53px" alt="..." />
                    <h4>Ashutosh Dubey</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Minima assumenda praesentium itaque! Eos illo perspiciatis
                      veritatis repudiandae vero doloremque, ea aliquam laborum
                      officiis rerum accusamus voluptates numquam,
                      exercitationem architecto, quam praesentium itaque
                      deserunt nesciunt. Obcaecati nobis minus iste ullam,
                      expedita in inventore reprehenderit id, provident ducimus
                      officiis recusandae numquam molestiae?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
