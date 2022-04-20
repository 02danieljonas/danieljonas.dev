import React, { useTransition } from "react";
import Section from "../Section";
import portrait from "../../images/portrait.png";

//TODO

const About = ({ sections }) => {
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
            
            <img
                    src={portrait}
                    style={{
                        //? The image is not directly on the div because it is translated 50%
                        //TODO use only one image, that might be too hard                        

                        position: "fixed",
                        zIndex: 9,
                        width: "50vh",
                        top: "50vh",
                        left: "50vw",
                        margin: "0 auto",
                        transform: "translate(-50%, -50%)",
                        aspectRatio: "1/1",
                    }}
                />
            <div
                style={{
                    zIndex: 1,
                    position: "absolute",
                    top: "101vh",
                    left: "50vw",
                    transform: "translate(-50%, 0%)",
                    height: "150vh",
                    width: "50vh",
                    // backgroundColor: "green",
                }}
            >
                <img
                    src={portrait}
                    style={{
                        //? The image is not directly on the div because it is translated 50%
                        position: "sticky",
                        width: "50vh",
                        top: "50vh",
                        margin: "0 auto",
                        transform: "translate(0%, -50%)",
                    }}
                />
            </div>
            
        </Section>
    );
};

export default About;
