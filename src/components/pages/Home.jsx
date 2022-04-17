import React from "react";
import Section from "../Section";
import logo from "../../images/logo.png";

const Home = ({ sectionInfo }) => {
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
                }}
                sectionInfo={sectionInfo}
                image={<img src={logo} width="40px" height="40px" alt="logo" />}
            >
                Home-Proper
            </Section>
        </>
    );
};

export default Home;
