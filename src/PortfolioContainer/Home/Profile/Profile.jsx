import React from 'react'
import Typewriter from 'typewriter-effect'
import ScrollService from '../../../utilities/ScrollService'
import Animations from '../../../utilities/Animations'
import './Profile.css'

const Profile = () => {
  return ( 
    <div className='profile-container'>
        <div className="profile-parent">
            <div className="profile-detail">
                <div className="colz">
                    <div className="colz-icons">
                        <a href="#">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-youtube-square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-twitter'></i>
                        </a>
                    </div>
                </div>
           

                <div className="profile-details-name">
                    <span className="primary-text">
                        { '' }
                        Hello, I'M <span className="highlighted-text">Shafiu</span>
                    </span>
                </div>

                <div className="profile-details-role">
                    <span className="primary-text">
                        { '' }
                        <h1>
                            <Typewriter
                                options={{
                                    strings: [
                                    'Enthuasiastic Dev ',
                                    'Full Stak Dev',
                                    'ML Engineer',
                                    'React Native Dev',
                                    'Laravel Dev'
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <span className="profile-role-tagline">
                            Knack of building applications with front  and back
                        </span>
                    </span>
                </div>

                <div className="profile-options">
                    <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                        { '' }
                        Hire Me { '' }
                    </button>
                    <a href="shafiu.pdf" download='Shafiu Ibn Yushawu.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>                 
                
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background"> </div>
            </div>
        </div>
    </div>
  )
}

export default Profile