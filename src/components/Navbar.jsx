import React, { useState, useRef } from "react";

const NavbarElement = ({ sections, onClick }) => {
    const navElementList = 
        sections.map(function ({ name, key, addClassName }) {
            return (
                [<div
                    name={name}
                    id={key}
                    key={key}
                    onClick={onClick}
                    className={addClassName}
                    
                >
                    {name}
                </div>,
]
            )
        })
    

    return (
        <>
            {
            navElementList
            }
        </>
    );
};

const Navbar = ({ onClick, children, mainRefs, sections }) => {
    const [height, setHeight] = useState("100vh");
    const listenToScroll = () => {
        var viewHeight = window.visualViewport.height;
        var scrollY = window.scrollY;

        var imgPosition = sections[1].ref.current.children.length - 1;

        
        // TODO find out the section the user is on and highlight the proper nav ele
        // TODO if the about me section is above the top, set image to not moving and the position to middle of the screen
        var imgStyle = sections[1].ref.current.children[imgPosition].style
        if (
            sections[1].ref.current.children[0].getBoundingClientRect().top <=
            80//viewHeight / 2
        //TODO set it in the middle with an offset of the size of the nav bar
        //TODO on the first load of things set the value of the image what I want after
        ) {
            imgStyle.position = "relative"
            imgStyle.top = "200vh"//viewHeight/2-80
            // imgStyle.tr
            imgStyle.zIndex=0
            console.log()
        } else {
            imgStyle.position = "fixed"
            imgStyle.top = "50vh"
            imgStyle.zIndex=3

        }

        if (viewHeight - scrollY > 70) {
            setHeight(viewHeight - scrollY);
        } else {
            setHeight(70);
        }
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
