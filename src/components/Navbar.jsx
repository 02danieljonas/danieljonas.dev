import React, { useState, useRef, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
//put the info ar the top right of the screen

const NavbarElement = ({ sections, onClick, navRef }) => {
    /*
    TODO I THINK:
    .on scroll the scroll bar is realized only after it is used and it causes the elements to shift 10 pixels
    */
    // // useEffect(() => {
    //     const navElementList1 = [];
    //     const pegLength = window.visualViewport.width / sections.length;

    //     // console.log(window.visualViewport.width);
    //     for (let i = 0; i < sections.length; i++) {
    //         try{
    //         console.log("navRef.current.height/2", navRef.current.height/2)
    //         console.log("navRef.current", navRef.current)

    //         navElementList1.push([
    //             <span
    //                 name={sections[i].name}
    //                 id={sections[i].key}
    //                 key={sections[i].key}
    //                 onClick={onClick}
    //                 className={sections[i].addClassName}
    //                 info={window.visualViewport.width}
    //                 style={{
    //                     position: "absolute",
    //                     left: pegLength * i + pegLength / 2,
    //                     top: navRef.current.height/2,
    //                     cursor: "pointer",
    //                     transform: "translate(-50%, -50%)",
    //                 }}
    //             >
    //                 {sections[i].name}
    //             </span>,
    //         ]);
    //     }catch{}
    //     }


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
    // }, []);
};

const Navbar = ({ onClick, children, mainRefs, sections }) => {
    const [height, setHeight] = useState("100vh");
    const [viewHeight, setViewHeight] = useState(window.visualViewport.height);
    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(() => {
        const resize = () => {
            setViewHeight(window.visualViewport.height);
            setScrollY(window.scrollY);
            //TODO I should set these up so they aren't called that much
            if (viewHeight - scrollY > 70) {
                setHeight(viewHeight - scrollY);

                sections[1].ref.current.lastChild.previousSibling.style.display =
                    "revert"; //should be revert
                sections[1].ref.current.lastElementChild.children[0].style.display =
                    "none"; //should be none
            } else {
                setHeight(70);
                sections[1].ref.current.lastChild.previousSibling.style.display =
                    "none";
                sections[1].ref.current.lastElementChild.children[0].style.display =
                    "revert";
            }
            mainRefs.current.style.paddingTop = "100vh";
            //TODO fix: on reload the image values are set wrong until scroll
        };
        window.addEventListener("scroll", resize);
        window.addEventListener("resize", resize);
    }, [window.visualViewport.height - window.scrollY > 70 /*, above*/]);
    // const NavbarElemRefs = [];

    const [navRef, setNavRef] = useState(useRef(null));

    // const navRef = useRef(null)
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
            <FaInfoCircle
                style={{
                    position: "fixed",
                    zIndex: 999,
                    color: "red",
                    top: "35px",
                    right: "1rem",
                    cursor: "pointer",
                    transform: "translate(-50%, -50%)",
                }}
                onClick={() => {
                    console.log(sections[1].info);
                }}
            />

            <NavbarElement
                sections={sections}
                onClick={onClick}
                navRef = {navRef}
            />
            {children}
        </div>
    );
};

export default Navbar;
