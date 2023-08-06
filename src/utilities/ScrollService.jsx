import { Subject } from 'rxjs';
import { TOTAL_SCREENS } from './commonUtils';

export default class ScrollService {
    static scrollHandler = new ScrollService()

    static currentScreenBroadCaster = new Subject()

    static currentScreenFadeIn = new Subject()

    constructor() {
      window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }

    scrollToHireMe = () => {
      const contactMeScreen = document.getElementById('Contact Me');
      if (!contactMeScreen) return;
      contactMeScreen.scrollIntoView({ behavior: 'smooth' });
    }

    scrollToHome = () => {
      const HomeScreen = document.getElementById('Home');
      if (!HomeScreen) return;
      HomeScreen.scrollIntoView({ behavior: 'smooth' });
    }

    isElementInView = (elem, type) => {
      const rec = elem.getBoundingClientRect();
      const elementTop = rec.top;
      const elementBottom = rec.Bottom;

      const partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
      const completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

      switch (type) {
        case 'partial':
          return partiallyVisible;

        case 'complete':
          return completelyVisible;

        default:
          return false;
      }
    }

    checkCurrentScreenUnderViewport = (event) => {
      if (!event || Object.keys(event).length < 1) return;

      for (const screen of TOTAL_SCREENS) {
        const screenFromDOM = document.getElementById(screen.screen_name);
        if (!screenFromDOM) continue;

        const fullyVisible = this.isElementInView(screenFromDOM, 'complete');
        const partiallyVisible = this.isElementInView(screenFromDOM, 'partial');

        if (fullyVisible || partiallyVisible) {
          if (partiallyVisible && !screen.alreadyRendered) {
            ScrollService.currentScreenFadeIn.next({
              fadeInScreen: screen.screen_name,
            });
            screen.alreadyRendered = true;
            break;
          }
          if (fullyVisible) {
            ScrollService.currentScreenBroadCaster.next({
              screenInView: screen.screen_name,
            });
            break;
          }
        }
      }
    }
}
