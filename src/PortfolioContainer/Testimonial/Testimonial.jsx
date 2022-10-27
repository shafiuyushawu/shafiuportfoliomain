import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../utilities/ScreeenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations';
import './Testimonial.css'

const Testimonial = ( props ) => {

    let fadeInScreenHandler = ( screen ) => {
        if( screen.fadeScreen !== props.id ) return
        Animations.animations.fadeInScreen( props.id )
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe( fadeInScreenHandler )

    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
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
    <div>
        <ScreenHeading title={ 'Testimonial' } subHeading={ 'What My Client Say About Me' } />
        <section className='testimonial-section' id={ props.id || '' }>
            <div className="container">
                <div className="row">
                    <OwlCarousel classID='owl-carousel' id='testimonial-carousel' { ...options }>
                        
                        <div className="col-lg-12">
                            <div className="testi-item">
                                  <div className="testi-comment">
                                        <p> 
                                            <i className='fa fa-quote-left' />
                                                I patronized Ehizeex and when He delivered, I honestly
                                                fell in love with the project He is a very honest guy and
                                                he delivers ontime.
                                           <i className='fa fa-quote-right' />
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className='fa fa-star' />
                                            </li>
                                            <li>
                                                <i className='fa fa-star' />
                                            </li>
                                            <li>
                                                <i className='fa fa-star' />
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt' />
                                            </li>
                                            <li>
                                                <i className='fa fa-star' />
                                            </li>
                                        </ul>
                                  </div>
                                  <div className="client-info">
                                    <img src="img/testimonial/lady.png" alt="no internet connection" />
                                  </div>
                                  <h5>Shafiu Ibn Yushawu</h5>
                                  <p>CEO IBNSCO Enterprise</p>
                            </div>
                        </div>
                        
                    </OwlCarousel>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Testimonial