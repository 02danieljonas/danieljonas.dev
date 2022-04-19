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
        // if (!scrollY) {
        //     console.log(
        //         sections[1].ref.current.children[
        //             sections[1].ref.current.children.length - 1
        //         ]
        //     );
        // }
        if (viewHeight - scrollY > 70) {
            setHeight(viewHeight - scrollY);
        } else {
            setHeight(70);
        }
        // console.log(navRef.current.getBoundingClientRect())
        try {
            var image2Position = sections[1].ref.current.children.length - 1;
            var topofImageFixed = sections[1].ref.current.children[image2Position - 1].getBoundingClientRect().top
            var topofImageSticky = sections[1].ref.current.children[image2Position].children[0].getBoundingClientRect().top;

            if (topofImageFixed >=topofImageSticky) {
                sections[1].ref.current.children[image2Position - 1].style.display = "none";
            } else {
                sections[1].ref.current.children[image2Position - 1].style.display = "revert";
                console.log(sections[1].ref.current.children[image2Position].children[0].style)
                // sections[1].ref.current.children[image2Position].children[0].style.display = "none"
            }
            if(true){

            }
        } catch {}
        // console.log(scrollY)
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

    const navRef = useRef(null);

    return (
        <div
            className="Navbar"
            ref={navRef}
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
