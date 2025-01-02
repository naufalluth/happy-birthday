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
        .from(".two p.text-one", 0.8, textFadeIn)
        .to(".two p.text-one", 0.7, textFadeOut, "+=1.5")
        .from(".two p.text-two", 0.7, textFadeIn)
        .to(".two p.text-two", 0.7, textFadeOut, "+=1")
        .to(
            ".two",
            0.7,
            {
                opacity: 0,
                y: 10
            },
            "=+.8"
        )
        .from(".three", 0.7, { opacity: 0, y: -20, })
        .from(".three p.wish-text1", 0.7, textFadeIn)
        .to(".three p.wish-text1", 0.7, textFadeOut, "+=1")
        .from(".three p.wish-text2", 0.7, textFadeIn)
        .from(".three span.block-text", 0.7, textFadeIn)
        .to(".three span.block-text", 1, {
            color: "white", scale: 1.2, x: 10,
            ease: "power2.inOut",
        })
        .to(".three p.wish-text2", 0.7, textFadeOut)
        .from(".three p.wish-text3", 0.7, textFadeIn)
        .to(".three p.wish-text3", 0.7, textFadeOut, "+=1")
        .to(
            ".three",
            0.7,
            {
                scale: 0.2,
                opacity: 0,
                y: 10,

            })
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
                scale: 6,
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
        .from(".nine", 0.7, textFadeIn, "+=2.0")
        .to(".nine", 0.7, textFadeOut, "+=3",)
        .staggerFrom(".ten", 1, textFadeIn, 1.2)
        .from(".flower img", 30, { opacity: 0 })
        .to(".flower img", 30, { opacity: 0 }, "+=2.0",)


    // Replay button
    const replayButton = document.getElementById("replay");
    replayButton.addEventListener("click", () => {
        tl.restart();
    });
    console.log(replayButton)
}


document.addEventListener("DOMContentLoaded", function () {
    const audio = document.querySelector("audio");
    audio.play()
    animateElements();

}); 