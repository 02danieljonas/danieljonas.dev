import React from "react";
import Section from "../Section";
import logo from "../../images/logo.png";

const Home = ({ sections }) => {
    return (
        <>
            <Section
                name="Home"
                listOrder="0"
                addClassName="logo"
                style={{
                    position: "absolute",
                    top: 0,
                    paddingTop: 0,
                    zIndex: 0,
                    aspectRatio: "1/1",

                }}
                sections={sections}
                image={<img src={logo} width="40px" height="40px" alt="logo" />}
            >
                Home-Proper
            </Section>
        </>
    );
};

export default Home;
