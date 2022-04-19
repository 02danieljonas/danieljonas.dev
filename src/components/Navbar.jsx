import React, { useState, useRef } from "react";

const NavbarElement = ({ sections, onClick, NavbarElemRefs }) => {
    const func = (e) =>{
        console.log(e)
    }
    //TODO change nav bar so it's called by Section.jsx, will make it easier to set up refs in the elements
    //TODO could also just reformat his code
    //TODO The real answer is to reformat the code Section.jsx is called TOO much to do it properly

    const navElementList = sections.map(function ({ name, key, addClassName }) {
        NavbarElemRefs[key] = useRef(null)
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
        // if(!scrollY){
        //     console.log(sections[1].ref.current.children[sections[1].ref.current.children.length-1])
        // }
        if (viewHeight - scrollY > 70) {
            setHeight(viewHeight - scrollY);
        } else {
            setHeight(70);
        }
        // console.log("h is")
        // console.log(height)
        // if(height>200){
        //     sections[1].ref.current.children[sections[1].ref.current.children.length-2].style.display="none"
        // }
        // else{
        //     sections[1].ref.current.children[sections[1].ref.current.children.length-2].style.display="revert"
        // }
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

    const NavbarElemRefs = []

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
            <NavbarElement sections={sections} onClick={onClick} NavbarElemRefs={NavbarElemRefs}/>
            {children}
        </div>
    );
};

export default Navbar;
