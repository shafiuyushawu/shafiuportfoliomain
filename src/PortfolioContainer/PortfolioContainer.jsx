import React from 'react';
import { TOTAL_SCREENS } from '../utilities/commonUtils';

function PortfolioContainer() {
  const mapAllScreens = () => (
    TOTAL_SCREENS.map((screen) => (
      screen.component ? <screen.component screenName={screen.screen_name} id={screen.screen_name} /> : <div key={screen.screen_name} />
    ))
  );

  return (
    <div className="portfolio-container">
      { mapAllScreens() }
    </div>
  );
}

export default PortfolioContainer;
