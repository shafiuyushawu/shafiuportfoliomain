import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import ScreenHeading from '../../utilities/ScreeenHeading/ScreenHeading';
import './Testimonial.css';

import Wasiu from '../../assets/Testimonial/wasiu.jpg';
import Alex from '../../assets/Testimonial/alex.jpg';
import Amine from '../../assets/Testimonial/amine.jpg';

const Testimonial = () => {
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: 'bounceInRight',
    animateOut: 'bounceOutRight',
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div id="testimonial">
      <ScreenHeading title="Recomendation" subHeading="What My Superior Say About Me" />
      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            <OwlCarousel classID="owl-carousel" id="testimonial-carousel" options={options}>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I had the pleasure of working with Shafiu
                      on several projects,and I must say that he
                      played a vital role in ensuring our success in each project.
                      Shafiu is an exceptional communicator and has a keen eye for detail.
                      <i className="fa fa-quote-right" />
                      <br />
                      <a href="https://www.linkedin.com/in/shafiuyushawu/">See more</a>
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={Wasiu} alt="no internet connection" />
                  </div>
                  <h5>AbdulWasiu Omotayo</h5>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I am writing to highly recommend Shafiu Ibn Yushawu
                      for the software engineering position
                      in your organization. I have had the pleasure of working with
                      Shafiu for several years, and he has consistently demonstrated
                      exceptional skills and dedication to his work.
                      <i className="fa fa-quote-right" />
                      <br />
                      <a href="https://www.linkedin.com/in/shafiuyushawu/">See more</a>
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={Alex} alt="no internet connection" />
                  </div>
                  <h5>Alex Ssenyondo</h5>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I am writing to highly recommend Shafiu Ibn
                      Yushawu for any future professional opportunities.
                      I had the pleasure of working with him as a student at
                      Microverse for collaborative projects, during which time
                      he consistently impressed me with his knowledge,
                      work ethic, and positive attitude.
                      <i className="fa fa-quote-right" />
                      <br />
                      <a href="https://www.linkedin.com/in/shafiuyushawu/">See more</a>
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={Amine} alt="no internet connection" />
                  </div>
                  <h5>Mohammed El Amine Derbal</h5>
                  <p>Software Engineer</p>
                </div>
              </div>

            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
