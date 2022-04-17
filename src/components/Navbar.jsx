import React, { useRef, useState } from "react";

const NavbarElement = ({ sections, onClick }) => {
    return (
        <>
            {sections.map(function ({ name, key }) {
                // console.log(data.name)
                return (
                    <div name={name} id={key} key={key} onClick={onClick}>
                        {name}
                    </div>
                );
            })}
        </>
    );
};
//TODO the event listener should only be active when the screen top is neer 100vh
//if bellow deactive turn it off
//
const Navbar = ({ sections, onClick, children }) => {
    const [height, setHeight] = useState("100vh");
    const listenToScroll = () => {
        var viewHeight = window.visualViewport.height;
        var scrollY = window.scrollY;
        setHeight(viewHeight - scrollY > 70 ? viewHeight - scrollY : 70);
    };
    window.addEventListener("scroll", listenToScroll);
    return (
        <div
            className="Navbar"
            style={{
                position: "fixed",
                width: "100vw",
                height:
                    window.visualViewport.height - window.scrollY > 70
                        ? window.visualViewport.height - window.scrollY
                        : 70,
                top: 0,
                left: 0,
                zIndex: 2,
                // transition: "1s",
            }}
        >
            <NavbarElement sections={sections} onClick={onClick} />
            {children}
        </div>
    );
};

export default Navbar;
