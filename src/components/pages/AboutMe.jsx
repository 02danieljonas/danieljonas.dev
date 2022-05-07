import React from "react";
import Section from "../Section";
import portrait from "../../images/portrait.png";
import { useEffect } from "react";
import { useRef } from "react";
//I feel like this programming thing is a drug
//You get into it, get all the happiness signals from your brain in the beginning
//then the drawbacks starts to take efffect, sleepless nights, stress, bad mood for a bit of domine when you get another hit/ completed that part of the programing
//just to start the loop again
// I hate and love programming

//todo added an importantRef to Sections 

const About = ({ sections }) => {
    const info = `I made this section very annoying for myself, the current version works by switching between two images and I tried my hardest to only use one image and that caused lots of headaches and I ended up not **actively** touching this for like 2-3 days
    I've decided to just keep the 2 image system, this is meant to be fun, not stressful
    oh my god i finaly figured this shit out, college tour gave ne a long break from working on this, because I worked on it everyday and I decided to change something about the container of the image and that ended up with me comming up with the solution for only using one image which is pretty amazing.
    Now the other problem is figuring out a way to change the states responsively for reloading, when scrolled down.
    The trip really hurt my work time though, I can't work on the bus probably a mental thing
    `; //-talk about scrapping the feature and the time limit that came with it
    
    /* 
    Talk about all of the hardship involved with making this
    */

    //- I think i am going to have to scrap the feature in which the image switches zIndexs until later :((((
    //!look at forwardRef

    // const importantRef = useRef(null)
    useEffect(() => {
    }, []);
    return (
        <Section name="AboutMe" listOrder="1" sections={sections} info={info} /*ref={importantRef}*/>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                nec vestibulum nunc. Vestibulum fringilla enim ut porttitor
                ultrices. Praesent volutpat elementum velit, id imperdiet urna
                imperdiet vitae. Praesent vestibulum eu mauris at posuere.
                Integer tincidunt placerat sagittis. Phasellus et ornare odio.
                Pellentesque at nulla consectetur, eleifend mi quis, dictum
                dolor. Duis aliquam quis arcu at tempus. Quisque ante nulla,
                tristique vel scelerisque sed, porttitor non purus. Fusce
                tristique iaculis justo, id convallis lorem. Duis auctor, lectus
                vel bibendum vehicula, urna diam efficitur nibh, sit amet
                tincidunt mi sem vitae turpis. Vivamus lobortis laoreet velit
                vel facilisis. Quisque sagittis mauris id turpis faucibus, sit
                amet gravida sem ultricies.
            </div>
            <div
                className="container"
                style={{
                    position: "absolute",
                    top: "50vh",
                    left: "50vw",
                    transform: "translate(-50%, 0%)",
                    height: "150vh", 
                    width: "50vh",
                    zIndex:
                        window.visualViewport.height - window.scrollY > 70
                            ? 1
                            : 1,
                }}
            >
                <img
                    src={portrait}
                    id="imageBelow"
                    alt="My Portrait"
                    //? The image is not directly on the div because it is translated 50%
                />
            </div>
        </Section>
    );
};

export default About;
