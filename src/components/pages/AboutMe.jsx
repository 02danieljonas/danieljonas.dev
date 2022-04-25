import React, { useTransition } from "react";
import Section from "../Section";
import portrait from "../../images/portrait.png";

//TODO use only one image with a css, tooo hard for past me to figure out, good luck future me
//TODO translate, breaks fixed position for some reason and no one bothers to fix it :(
//TODO FIX: the image shouldn't be a child to the div, it should have it's own properties and add it as a child to the div for the sticky effect

const About = ({ sections }) => {
                /* Talk about all of the hardship involved with making this
             */
    return (
        <Section name="About Me" listOrder="1" sections={sections}>
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
            <details>
                I made this section very annoying for myself, the current version works by switching between two images and I tried my hardest to only use one image and that caused lots of headaches and I ended up not **actively** touching this for like 2-3 days
                I've decided to just keep the 2 image system, this is meant to be fun, not stressful
            </details>




            <img
                    src={portrait}
                    id="imageAbove"
                    //     //? The image is not directly on the div because it is translated 50%
                    //     //TODO use only one image, that might be too hard                        
                />

            <div
                className="container"
                style={{
                    zIndex: 1,
                    position: "absolute",
                    top: "100vh",
                    left: "50vw",
                    transform: "translate(-50%, 0%)",
                    height: "100vh",
                    width: "50vh",
                }}
            >
                <img
                    src={portrait}
                    id="imageBelow"
                    //? The image is not directly on the div because it is translated 50%
                />
            </div>
            {/* <div>
                <details></details>
                <footer></footer>
            </div> */}
        </Section>
    );
};

export default About;
