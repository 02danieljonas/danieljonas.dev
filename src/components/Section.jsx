import React from "react";
import { useRef } from "react";

const Section = ({
    name, //the name to put on the navbar
    listOrder, //A unique number to be used to sync up all list
    children, //the actually section
    style,
    image, //if an image is passed the image is put on the nav bar instead of {name}
    addClassName,
    sectionInfo,
}) => {
    sectionInfo[listOrder] = 
        {
            key: listOrder, //merge this--
            ref: useRef(null),
            name: image != null ? image : name,
            addClassName: addClassName,
        };

    return (
        <section
            key={sectionInfo[listOrder].key}
            ref={sectionInfo[listOrder].ref}
            name={sectionInfo[listOrder].name}
            className={sectionInfo[listOrder].addClassName}
            style={style}
        >
            {children}
        </section>
    );
};

export default Section;
