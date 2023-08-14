// import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import './Profile.css';
import {
  FaGithub, FaLinkedinIn, FaTwitter, FaAngellist,
} from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';
// import resume from '../../../assets/Home/Shafiu.pdf';

const Profile = () => {
  const bio = 'As a Full-stack software developer, I possess a diverse skill set that empowers me to create and deploy dynamic user interfaces and immersive experiences, leaving a lasting impact on both clients and companies. Leveraging cutting-edge technologies and design systems, I craft interactive solutions that exceed expectations and align seamlessly with business objectives. My dedication to user satisfaction drives me to deliver the best, most functional, and enduring solutions that merge aesthetic appeal with practical functionality.';
  return (
    <div className="profile-container">
      <div className="profile-parent ">
        <div className="profile-detail">
          <div className="colz">
            <div className="colz-icons">
              <a href="https://github.com/shafiuyushawu">
                <FaGithub className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/shafiuyushawu">
                <FaLinkedinIn className="icon" />
              </a>
              <a href="https://twitter.com/shafiuyushawu">
                <FaTwitter className="icon" />
              </a>
              <a href="https://medium.com/@shafiuyushawu">
                <SiMedium className="icon" />
              </a>
              <a href="https://wellfound.com/u/shafiuyushawu">
                <FaAngellist className="icon" />
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I&apos;M
              {' '}
              <span className="highlighted-text">Shafiu</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">

              <h1>
                <Typewriter
                  options={{
                    strings: [
                      'Enthuasiastic Dev ',
                      'Full Stak Dev',
                      'ML Engineer',
                      'React Native Dev',
                      'Laravel Dev',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span className="profile-role-tagline">
                {bio}
              </span>
            </span>
          </div>
        </div>
        <div>
          <div className="profile-picture">
            <div className="profile-picture-background"> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
