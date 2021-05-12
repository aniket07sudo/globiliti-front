export const ContactForm = {
    hidden:{
        y:50,
        opacity:0
    },
    show:{
        y:0,
        opacity:1,
        transition:{
            duration:.6,
            ease:"easeInOut",
            when:"beforeChildren",
            staggerChildren:.2
        }
    }
}

export const Photo = {
    hidden: {
        opacity: 0,
        scale:1.3
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: .7,
            ease:"easeInOut"
        }
    }
}

export const LogoAnim = {
    hidden: {
        opacity: 0,
        x:-50
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .5,
            ease:"easeIn"
        }
    }
}