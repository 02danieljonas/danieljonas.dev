import React, { useTransition } from "react";
import Section from "../Section";
import portrait from "../../images/portrait.png";

//TODO

const About = ({ sections }) => {
    return (
        //TODO make a div that spans from the top of the screen to about me
        //TODO make img a sticky on that div
        //TODO make the div stop at the position you want to be the middle of about me
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
            <div
                style={{
                    zIndex: "3",
                    position: "absolute",
                    top: "0",
                    left: "50vw",
                    transform: "translate(-50%,0%)",
                    height: "200vh",
                    width: "50vw",
                    backgroundColor: "green",
                    //TODO fix issue with hit box going over nav elemnets
                }}
            >
                <img
                    src={portrait}
                    style={{
                        position: "sticky",
                        zIndex: 99999,
                        top: "50vh",
                        left: "75vw",
                        width: "100px",
                        margin: "0 auto",
                        transform: "translate(-50%, -50%)",
                    }}
                />
            </div>
        </Section>
    );
};

export default About;
