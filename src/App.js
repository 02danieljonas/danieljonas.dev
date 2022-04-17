import Navbar from "./components/Navbar";
import { useRef, useEffect } from "react";
import Home from "./components/pages/Home";
// import logo from "./images/logo.png";
import About from "./components/pages/About";
import Section1 from "./components/pages/Section1";

function App() {
    useEffect(() => {
        document.title = "Daniel's Website";
    }, []);
    const sectionInfo = []; //look at Section.jsx for help
    const scrollToRef = (target) => {
        if (target.target.src != null) {
            //this is to detect if an image exist and if the user clicks on the image it takes the info from the parent div
            window.scrollTo({
                top: sectionInfo[target.target.parentElement.id].ref.current
                    .offsetTop,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: sectionInfo[target.target.id].ref.current.offsetTop,
                behavior: "smooth",
            });
        }
    };
    const mainRefs = useRef(null);
    return (
        <div className="App">
            <main 
            ref={mainRefs}
            style={{ paddingTop: window.visualViewport.height }}>
                <Home sectionInfo={sectionInfo} />
                <About sectionInfo={sectionInfo} />
                <Section1 sectionInfo={sectionInfo} />
            </main>
            <Navbar onClick={scrollToRef} sectionInfo={sectionInfo} mainRefs={mainRefs}></Navbar>
        </div>
    );
}

export default App;
