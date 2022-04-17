import React from "react";
import { useRef } from "react";

const Section = ({
    name, //the name to put on the navbar
    listOrder, //A unique number to be used to sync up all list
    children, //the actually section
    refList, //list of all ref to be used for scrolling
    style,
    sectionList, //a list of all the sections
    image, //if an image is passed the image is put on the nav bar instead of {name}
    addClassName,
}) => {
    refList[listOrder] = useRef(null);

    sectionList[listOrder] = {
        key: listOrder, //merge this--
        ref: refList[listOrder],
        name: image != null ? image : name,
        addClassName: addClassName,
    };
    return (
        <section
            name={sectionList[listOrder].name} //--with this
            key={sectionList[listOrder].key}
            ref={sectionList[listOrder].ref}
            // className={sectionList[listOrder].addClassName}
            style={style}
        >
            {children}
        </section>
    );
};

export default Section;
