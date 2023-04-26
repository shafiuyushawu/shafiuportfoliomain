import AboutMe from '../PortfolioContainer/AboutMe/AboutMe'
import ContactMe from '../PortfolioContainer/ContactMe/ContactMe'
import Home from '../PortfolioContainer/Home/Home'
import Resume from '../PortfolioContainer/Resume/Resume'
import Testimonial from '../PortfolioContainer/Testimonial/Testimonial'
import Projects from '../PortfolioContainer/Projects/Projects'

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
    {
        screen_name: 'Projects',
        component: Projects
    },
    {
        screen_name: 'Testimonial',
        component: Testimonial
    },
    {
        screen_name: 'Contact Me',
        component: ContactMe
    }
]

export const GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) return -1
    for (let i = 0; i < TOTAL_SCREENS.length; i++) {
        if (TOTAL_SCREENS[i] === screen_name) return i
    }
    return -1
}