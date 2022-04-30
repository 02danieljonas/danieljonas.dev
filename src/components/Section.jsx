import React from "react";
import { useRef } from "react";

const Section = ({
    name, //the name to put on the navbar
    listOrder, //A unique number to be used to sync up all list
    children, //the actually section
    style,
    image, //if an image is passed the image is put on the nav bar instead of {name}
    addClassName,
    info,
    sections, //a list to keep all of the info for the section
}) => {
    sections[listOrder] = {
        key: listOrder, //merge this--
        ref: useRef(null),
        name: image != null ? image : name,
        addClassName: addClassName,
        info: info,
    };

    return (
        <section
            key={sections[listOrder].key}
            ref={sections[listOrder].ref}
            name={sections[listOrder].name}
            className={sections[listOrder].addClassName}
            style={style}
        >

            {/* <dialog>{info}</dialog> */}
            {children}
        </section>
    );
};

export default Section;
