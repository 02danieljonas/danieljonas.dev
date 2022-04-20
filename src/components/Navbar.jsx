import React, { useState, useRef } from "react";

const NavbarElement = ({ sections, onClick, NavbarElemRefs }) => {
    const func = (e) => {
        console.log(e);
    };
    //TODO change nav bar so it's called by Section.jsx, will make it easier to set up refs in the elements
    //TODO could also just reformat his code
    //TODO The real answer is to reformat the code Section.jsx is called TOO much to do it properly

    const navElementList = sections.map(function ({ name, key, addClassName }) {
        // NavbarElemRefs[key] = useRef(null)
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
    //! scroll calls the resize variable A LOT and also the counter acts really weird, 
    //! if the count is at 80, it will console.log 1-80 (sometimes random order, sometimes in reverse)
    const [height, setHeight] = useState("100vh");
    const [viewHeight, SetViewHeight] = useState(window.visualViewport.height);
    const [scrollY, SetScrollY] = useState(window.scrollY);
    const resize = () => {
        SetViewHeight(window.visualViewport.height);
        SetScrollY(window.scrollY);

        if (viewHeight - scrollY > 70) {
            setHeight(viewHeight - scrollY);
            sections[1].ref.current.children[sections[1].ref.current.children.length-2].style.display="revert"
            sections[1].ref.current.children[sections[1].ref.current.children.length-1].children[0].style.display="none"
        } else {
            setHeight(70);
            sections[1].ref.current.children[sections[1].ref.current.children.length-2].style.display="none"
            sections[1].ref.current.children[sections[1].ref.current.children.length-1].children[0].style.display="revert"
        }
        mainRefs.current.style.paddingTop = "100vh";
    };
    window.addEventListener("scroll", resize);
    window.addEventListener("resize", resize);


    const NavbarElemRefs = [];

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
            <NavbarElement
                sections={sections}
                onClick={onClick}
                NavbarElemRefs={NavbarElemRefs}
            />
            {children}
        </div>
    );
};

export default Navbar;
