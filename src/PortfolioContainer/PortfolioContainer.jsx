import React from 'react'
import { TOTAL_SCREENS } from '../utilities/commonUtils'

function PortfolioContainer() {

    const mapAllScreens = () => {
        return(
            TOTAL_SCREENS.map(( screen ) => (
                screen.component ? <screen.component screenName={ screen.screen_name } id={ screen.screen_name } /> : <div key={ screen.screen_name }></div>
            ))
        )
    }

  return (
    <div className='portfolio-container'>
        { mapAllScreens() }
    </div>
  )
}

export default PortfolioContainer