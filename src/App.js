import Navbar from "./components/Navbar";
import { useRef, useState, useEffect } from "react";
import Home from "./components/pages/Home";
// import logo from "./images/logo.png";
import About from "./components/pages/About";
import Section1 from "./components/pages/Section1";

function App() {
    useEffect(() => {
        document.title = "Daniel's Website";
    }, []);

    const refList = [];
    const sectionList = [];

    const scrollToRef = (target) => {
        if (target.target.src != null) {
            //this is to detect if an image exist and if the user clicks on the image it takes the info from the parent div
            window.scrollTo({
                top: refList[target.target.parentElement.id].current.offsetTop,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: refList[target.target.id].current.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="App">
            <main style={{ paddingTop: window.visualViewport.height }}>
                <Home refList={refList} sectionList={sectionList} />
                <About refList={refList} sectionList={sectionList} />
                <Section1 refList={refList} sectionList={sectionList} />
            </main>
            <Navbar sections={sectionList} onClick={scrollToRef}></Navbar>
        </div>
    );
}

export default App;
