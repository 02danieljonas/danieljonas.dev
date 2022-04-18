import React, { useState, useRef } from "react";

const NavbarElement = ({ sections, onClick }) => {
    const navElementList = sections.map(function ({ name, key, addClassName }) {
        return [
            <div
                name={name}
                id={key}
                key={key}
                onClick={onClick}
                className={addClassName}
            >
                {name}
            </div>,
        ];
    });

    return <>{navElementList}</>;
};

const Navbar = ({ onClick, children, mainRefs, sections }) => {
    const [height, setHeight] = useState("100vh");
    const listenToScroll = () => {
        var viewHeight = window.visualViewport.height;
        var scrollY = window.scrollY;
        // TODO find out the section the user is on and highlight the proper nav ele
        // console.log(scrollY)
        if(!scrollY){
            //show the image on th nav
            console.log(sections[1].ref.current.children[sections[1].ref.current.children.length-1])
        }
        if (viewHeight - scrollY > 70) {
            setHeight(viewHeight - scrollY);
            //TODO set the image zIndex above nav bar
        } else {
            setHeight(70);
            //TODO set the image zIndex below nav bar
        }
        if(height<140){
            sections[1].ref.current.children[sections[1].ref.current.children.length-1].style.zIndex=1
        }
        else{
            sections[1].ref.current.children[sections[1].ref.current.children.length-1].style.zIndex=3
        }
        //TODO if passed 50vh set
    };
    const resize = () => {
        var viewHeight = window.visualViewport.height;
        var scrollY = window.scrollY;
        setHeight(viewHeight - scrollY > 70 ? viewHeight - scrollY : 70);
        mainRefs.current.style.paddingTop = "100vh";
        //TODO looks for AboutMe and changes size accordingly
    };

    window.addEventListener("scroll", listenToScroll);
    window.addEventListener("resize", resize);

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
