import React from "react";
import "./Testimonials.css"; // Import the CSS file

const Testimonials = () => {
  return (
    <section className="section-wrapper">
      <div className="section-container">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">Our happy customers say about us</h2>
            <div className="menu-line-test"></div>
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
                    src="data:image/jpeg;base64,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"
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
