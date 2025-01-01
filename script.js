gsap.registerPlugin(TextPlugin)

const animateElements = () => {

    const textFadeIn = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }
    const textFadeOut = {
        opacity: 0,
        y: 20,
        rotationX: 5,
        skewX: "-15deg"
    }

    const tl = gsap.timeline();

    tl.to(".container", 0.1, {
        visibility: "visible"
    })
        .from(".greeting", 0.7, textFadeIn)
        .to(".greeting", 0.7, textFadeOut, "+=2.5")
        .from(".one", 0.7, { opacity: 0, y: -20, })
        .to(
            ".one",
            0.7,
            {
                ease: "power2.inOut",
                opacity: 0,
                y: 10
            },
            "+=2.5"
        )
        .from(".two", 0.7, { opacity: 0, y: -20, })
        .to(
            ".two",
            0.7,
            {
                opacity: 0,
                y: 10
            },
            "=+2.5"
        )
        .from(".three", 0.7, { opacity: 0, y: -20, })
        .to(
            ".three",
            0.7,
            {
                scale: 0.2,
                opacity: 0,
                y: 10,

            }, "+=2.5")
        .from(
            ".four",
            0.5,
            {
                scale: 0.2,
                opacity: 0,
                y: -150
            },
            "+=0.7"
        )
        .staggerFrom("div.four div.event1", 0.8, {
            opacity: 0,
            scale: 0.1,
            rotation: -30,
            ease: "expo.inOut"
        })
        .staggerFrom(
            "div.four div.event1 h2.age span.bigNumber",
            0.8,
            {
                scale: 3,
                opacity: 0,
                rotation: 30,
                ease: "expo.inOut"
            },
            0.2
        )
        .staggerTo(
            "div.four h2.four span.bigNumber",
            0.8,
            {
                scale: 10,
                opacity: 0,
                rotation: -30,
                ease: "expo.inOut"
            },
            0.2,
            "+=1"
        ).staggerTo("div.four div.event1", 0.8, {
            opacity: 0,
            scale: 6,
            rotation: 30,
            ease: "expo.inOut"
        }, 0.6, "+=1")
        .to(".four", 0.7, {
            ease: "power2.inOut",
            opacity: 0,
            y: 10,
        }, "+=2.0",)
        .from(".five", 0.7, { opacity: 0, y: -20, })
        .to(".five", 0.7, {
            ease: "power2.inOut",
            opacity: 0,
            y: 10,
        }, "+=2.0",)
        .from(".six", 0.7, { opacity: 0, y: -20, })
        .to(".six", 0.7, {
            opacity: 0,
            y: 10,
        }, "+=2.0",)
        .from(".seven", 0.7, { opacity: 0, y: -20, })
        .to(".seven", 0.7, {
            opacity: 0,
            y: 10,
        }, "+=2.0",)
        .from(".eight", 0.7, { opacity: 0, y: -20, })
        .to(".eight", 0.7, {
            opacity: 0,
            y: 10,
        }, "+=2.0",)
        .from(".nine", 0.7, textFadeIn)
        .to(".nine", 0.7, textFadeOut, "+=2.0",)
        .staggerFrom(".ten", 1, textFadeIn, 1.2)
        .from(".flower img", 30, { opacity: 0 }, "+=2.0",)
        .to(".flower img", 30, { opacity: 0 }, "+=2.0",)


    // Replay button
    const replayButton = document.getElementById("replay");
    replayButton.addEventListener("click", () => {
        tl.restart();
    });
    console.log(replayButton)
}


document.addEventListener("DOMContentLoaded", animateElements); 