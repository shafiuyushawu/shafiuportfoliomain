import AboutMe from '../PortfolioContainer/AboutMe/AboutMe'
import Home from '../PortfolioContainer/Home/Home'
import Resume from '../PortfolioContainer/Resume/Resume'

export const TOTAL_SCREENS = [
    {
        screen_name: 'Home',
        component: Home
    },
    {
        screen_name: 'About Me',
        component: AboutMe
    },
    {
        screen_name: 'Resume',
        component: Resume
    },
]

export const GET_SCREEN_INDEX = ( screen_name ) => {
    if( !screen_name ) return -1
    for( let i = 0; i < TOTAL_SCREENS.length; i++ ){
        if( TOTAL_SCREENS[i] === screen_name ) return i
    }
    return -1
}