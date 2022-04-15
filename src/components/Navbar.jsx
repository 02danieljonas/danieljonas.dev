import React, { useState } from "react";

// if its 70 only check to see if its bigger than 70 than you can change
const Navbar = () => {
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
            Home
        </div>
    );
};

// #smallNav{
//     position: fixed;
//     height: 90px;
//     top: 0;
//     left: 0;
//     width: 100vw;
// }

export default Navbar;
