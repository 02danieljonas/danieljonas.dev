import React, { useState, useRef, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
//! to call things that need to be loaded first try using useRef
/*
.highlight the section I am on --->
.on click of info icon print section name --->
.open modal with info from section


*/
const NavbarElement = ({ sections, onClick, navRef }) => {
    /*
    TODO I THINK:
    .on scroll the scroll bar is realized only after it is used and it causes the elements to shift 10 pixels
    .load this on the other useEffect()
    */
    // useEffect(() => {
    const navElementList1 = [];
    const pegLength = window.visualViewport.width / sections.length;

    // console.log(window.visualViewport.width);
    for (let i = 0; i < sections.length; i++) {
        try {
            // console.log("navRef.current.height", navRef.current.height)
            // console.log("navRef.current", navRef.current)
            // console.log(sections[0].name)
            // console.log(sections[1])
            // console.log(sections[2].name)
            navElementList1.push([
                <span
                    name={sections[i].name}
                    id={sections[i].key}
                    key={sections[i].key}
                    onClick={onClick}
                    className={sections[i].addClassName}
                    info={window.visualViewport.width}
                    // style={{
                    //     //TODO fix padding of the image, i have no idea why it's broken, please fix T_T
                    //     position: "absolute",
                    //     // left: pegLength * i + pegLength / 2,
                    //     // padding: sections[i].className == "logo"? 0:20,
                    //     // boxSizing: "border-box",
                    //     // maxHeight: 60.67,
                    //     // top: navRef.current.height,
                    //     cursor: "pointer",
                    //     transform: "translate(-50%, 0%)",
                    // }}
                >
                    {sections[i].name}
                </span>,
            ]);
        } catch {}
    }

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
    return <>{navElementList1}</>;
    // }, []);
};

const Navbar = ({ onClick, children, mainRefs, sections }) => {
    const [height, setHeight] = useState("100vh");
    const [viewHeight, setViewHeight] = useState(window.visualViewport.height);
    const [scrollY, setScrollY] = useState(window.scrollY);

    console.log()

    // sections[1].ref.current.lastChild.style.zIndex =
    // window.visualViewport.height - window.scrollY > 70 ? 3 : 1


    useEffect(() => {
        const resize = () => {
            //.change name to screen update
            setViewHeight(window.visualViewport.height);
            setScrollY(window.scrollY);
            // console.log(
            //     "Zero is ",
            //     sections[0].ref.current.getBoundingClientRect().y
            // );
            // console.log(
            //     "One is ",
            //     sections[1].ref.current.getBoundingClientRect().y
            // );
            // console.log(sections.length)
            // for (let i = 0; i)

            for (let i = sections.length-1; i != -1; i--) {
                //highlighting positition on navbar
                if (sections[i].ref.current.getBoundingClientRect().y < 0) {
                    console.log(sections[i].ref.current.style)
                    // sections[i].ref.current.style.color = "black"

                    // console.log("This active section is ", sections[i].name);
                    break;
                }
                else{
                    // console.log("This active section is ", sections[i].ref.current.style.color);
                }
            }
            //
            // sections[1].ref.current.lastChild.style.zIndex =
            //     viewHeight - scrollY > 70 ? 3 : 1
            
            //TODO I should set these up so they aren't called that much
            mainRefs.current.style.paddingTop = "100vh";
            //TODO fix: on reload the image values are set wrong until scroll
        };
        window.addEventListener("scroll", resize);
        window.addEventListener("resize", resize);
    }, [window.scrollY]);
    // const NavbarElemRefs = [];

    const [navRef, setNavRef] = useState(useRef(null));
    const [modalRef, setModalRef] = useState(useRef(null));

    // const navRef = useRef(null)
    return (
        <>
            <dialog
                ref={setModalRef}
                style={{
                    //     position: "fixed",
                    top: window.visualViewport.height / 2,
                    left: window.visualViewport.width / 2,
                    height: "70%",
                    width: "70%",
                    //     color: "cyan",
                    //     zIndex: 9999,
                    transform: "translate(-50%, -50%)",
                }}
            ></dialog>

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
                        modalRef.showModal();
                        console.log(sections[1].info);
                    }}
                />

                <NavbarElement
                    sections={sections}
                    onClick={onClick}
                    navRef={navRef}
                />
                {children}
            </div>
        </>
    );
};

export default Navbar;
