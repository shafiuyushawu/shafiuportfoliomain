export default class Animations {
    
    static animations = new Animations()

    fadeInScreen = ( screen_name ) => {
        let screen = document.getElementById( screen_name )
        if( !screen_name || !screen ) return

        screen.style.opacity = '5'
        screen.style.transoform = 'translateY( 1px )'
    }
}