import React, { useRef, useState } from "react";

const NavbarElement = ({ sections, onClick }) => {
    return (
        <>
            {sections.map(function (data) {
                return (
                    <div key={data.key} id={data.key} onClick={onClick}>
                        {" "}
                        {data.key}{" "}
                    </div>
                );
            })}
        </>
    );
};

const Navbar = ({ sections, onClick }) => {
    const [height, setHeight] = useState("100vh");
    const listenToScroll = () => {
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
            <NavbarElement sections={sections} onClick={onClick} />
        </div>
    );
};

export default Navbar;
