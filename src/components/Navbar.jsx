import React, { useState, useRef, useEffect } from "react";

const NavbarElement = ({ sections, onClick }) => {
    //TODO change nav bar so it's called by Section.jsx, will make it easier to set up refs in the elements
    //TODO could also just reformat this code
    //TODO The real answer is to reformat the code Section.jsx is called TOO much to do it properly
    //TODO// Center the nav elements...but better
    //TODO Set all other nav elems in a seperate div and make the home screen a special use case AKA reformate this code

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
    const [viewHeight, setViewHeight] = useState(window.visualViewport.height);
    const [scrollY, setScrollY] = useState(window.scrollY);
    // const image = sections[1].ref.current.children[1].children[0]

    //Add a ref here
    // console.log("Hey")

    // var thisImg = null;

    //    const [thisImg, setImage] = useState(null)

    const switchImageDisplayProp = (setAbove) => {
        //TODO figure out a way of putting var image at the top as a const

        if (setAbove == undefined) {
            console.error("Please setAbove to a boolean");
            return;
        }

        console.log("1", typeof thisImg);

        if (typeof thisImg == typeof thisImgs) {
            console.log("Passed");
            const thisImg = sections[1].ref.current.children[1].children[0];
        }
        console.log("2", typeof thisImg);

        if (setAbove) {
            // remove it as a child and set prop to fixed
            // sections[1].ref.current.lastElementChild.children[0]
            console.log(true);
        } else {
            // add it as a child and set prop to sticky
            //sections[1].ref.current.lastElementChild
            // console.log("Before", sections[1].ref.current.children[1])

            var t = sections[1].ref.current.children[1].children[0];
            sections[1].ref.current.children[1].removeChild(t);
            // console.log("After", sections[1].ref.current.children[1].children)

            sections[1].ref.current.children[1].appendChild(t);
        }
    };
    useEffect(() => {
        const resize = () => {
            setViewHeight(window.visualViewport.height);
            setScrollY(window.scrollY);
            if (viewHeight - scrollY > 70) {
                setHeight(viewHeight - scrollY);
                sections[1].ref.current.lastChild.previousSibling.style.display =
                    "revert"; //should be revert
                sections[1].ref.current.lastElementChild.children[0].style.display =
                    "none"; //should be none
                // switchImageDisplayProp(false);
            } else {
                setHeight(70);
                sections[1].ref.current.lastChild.previousSibling.style.display =
                    "none";
                sections[1].ref.current.lastElementChild.children[0].style.display =
                    "revert";
                // switchImageDisplayProp(false);
            }
            mainRefs.current.style.paddingTop = "100vh";
            //TODO looks for AboutMe and changes size accordingly
        };

        window.addEventListener("scroll", resize);
        window.addEventListener("resize", resize);
    }, [window.visualViewport.height-window.scrollY  > 70 ]);

    const NavbarElemRefs = [];

    return (
        <div
            className="Navbar"
            // ref={navRef}
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
