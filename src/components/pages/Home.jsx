import React from "react";
import Section from "../Section";
import logo from "../../images/logo.png";

//TODO: center the logo.png so the spin looks good

const Home = ({ refList, sectionList }) => {
    return (
        <>
            <Section
                name="Home"
                listOrder="0"
                refList={refList}
                addClassName="logo"
                style={{
                    position: "absolute",
                    top: 0,
                    paddingTop: 0,
                    zIndex: 0,
                }}
                sectionList={sectionList}
                image={<img src={logo} width="40px" />}
            >
                Home-Proper
            </Section>
        </>
    );
};

export default Home;
