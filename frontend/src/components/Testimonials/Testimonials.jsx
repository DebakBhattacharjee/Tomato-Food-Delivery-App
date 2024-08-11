import React from "react";
import "./Testimonials.css"; // Import the CSS file

const Testimonials = () => {
  return (
    <section className="section-wrapper">
      <div className="section-container">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">Our happy customers say about us</h2>
          </div>

          <div className="section-cards-wrapper">
            <div className="section-gradient-bg"></div>
            <div className="section-cards-container">
              <div className="card">
                <div className="card-content">
                  <div className="card-stars">
                    {/* Repeat star SVG */}
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <svg
                          key={i}
                          className="star-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>

                  <blockquote className="card-text">
                    "Tomato Food Delivery has completely transformed our dining
                    experience at home. The food is always fresh, flavorful, and
                    delivered on time. The convenience and quality make it our
                    go-to choice for a hassle-free meal. Highly recommended!"
                  </blockquote>
                </div>

                <div className="card-footer">
                  <img
                    className="card-avatar"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6QznX5HWl2xWF13BJx7xRnA1r7w_MuXLQA&s"
                    alt="Leslie Alexander"
                  />
                  <div className="card-user-info">
                    <p className="card-user-name">Priya Ray</p>
                    <p className="card-user-role">Food vlogger</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="card-stars">
                    {/* Repeat star SVG */}
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <svg
                          key={i}
                          className="star-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>

                  <blockquote className="card-text">
                    "We love Tomato Food Delivery for its exceptional service
                    and delicious food. From their prompt delivery to the
                    scrumptious, well-packaged meals, they never disappoint.
                    It's our favorite spot for ordering in, and their variety
                    keeps us coming back for more!"
                  </blockquote>
                </div>

                <div className="card-footer">
                  <img
                    className="card-avatar"
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Leslie Alexander"
                  />
                  <div className="card-user-info">
                    <p className="card-user-name">Ravi Kumar</p>
                    <p className="card-user-role">Food tester</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="card-stars">
                    {/* Repeat star SVG */}
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <svg
                          key={i}
                          className="star-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>

                  <blockquote className="card-text">
                    "Tomato Food Delivery consistently exceeds our expectations.
                    The online ordering process is seamless, and the food
                    arrives hot and tasty every time. The variety of dishes and
                    attention to detail in packaging make it a top choice for
                    our family dinners."
                  </blockquote>
                </div>

                <div className="card-footer">
                  <img
                    className="card-avatar"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDqtGCs1Dd1Bn7HzbxDIlogDBs68hVTh8RQ&s"
                    alt="Leslie Alexander"
                  />
                  <div className="card-user-info">
                    <p className="card-user-name">Narendra modi</p>
                    <p className="card-user-role">Vlogger</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
