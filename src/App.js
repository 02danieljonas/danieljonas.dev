import Navbar from "./components/Navbar";
import { useRef, useEffect } from "react";
import Home from "./components/pages/Home";
// import logo from "./images/logo.png";
import About from "./components/pages/AboutMe";
import Section1 from "./components/pages/Section1";

function App() {
    useEffect(() => {
        document.title = "Daniel's Website";
    }, []);
    const sections = []; //look at Section.jsx for help
    const scrollToRef = (target) => {
        if (target.target.src != null) {
            //this is to detect if an image exist and if the user clicks on the image it takes the info from the parent div
            window.scrollTo({
                top: sections[target.target.parentElement.id].ref.current
                    .offsetTop,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: sections[target.target.id].ref.current.offsetTop,
                behavior: "smooth",
            });
        }
    };
    const mainRefs = useRef(null);
    return (
        <div className="App">
            <main
                ref={mainRefs}
                style={{ paddingTop: window.visualViewport.height }}
            >
                <Home sections={sections} />
                <About sections={sections} />
                <Section1 sections={sections} />
            </main>
            <Navbar
                onClick={scrollToRef}
                sections={sections}
                mainRefs={mainRefs}
            ></Navbar>
        </div>
    );
}

export default App;
