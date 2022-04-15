import React, { useState } from "react";
import NavbarElement from "./NavbarElement";

//My image scrolls up and disappears

const Navbar = (e) => {
    const [height, setHeight] = useState("100vh");
    const listenToScroll = (e) => {
        var ViewHeight = window.visualViewport.height;
        var scrollY = window.scrollY;
        setHeight(ViewHeight - scrollY > 70 ? ViewHeight - scrollY : 70);
    };
    window.addEventListener("scroll", listenToScroll);
    return (
        <div
            className="Navbar"
            style={{
                position: "fixed",
                width: "100vw",
                height: height,
                top: 0,
                left: 0,
            }}
        >   
        <NavbarElement sections={e.sectionId}/>
        </div>
    );
};

export default Navbar;
