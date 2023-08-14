import React from 'react';
import PropTypes from 'prop-types';
import './ScreenHeading.css';

const ScreenHeading = ({ title, subHeading }) => (
  <div className="heading-container">
    <div className="screen-heading">
      <span>{title }</span>
    </div>
    {
            subHeading
              ? (
                <div className="screen-sub-heading">
                  <span>{ subHeading }</span>
                </div>
              )
              : <div />
        }

    <div className="heading-seperator">
      <div className="seperator-line">
        <div className="seperator-blob">
          <div />
        </div>
      </div>
    </div>

  </div>
);

ScreenHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default ScreenHeading;
