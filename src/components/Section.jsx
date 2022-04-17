import React from "react";
import { useRef } from "react";
//a template for reacting the sections
//        <section name="About" key="1" ref={refList[1]}>
//every single time its called it pushes to the list
//

const Section = ({
    name,
    listOrder,
    children,
    refList,
    style,
    sectionList,
}) => {
    refList[listOrder] = useRef(null);
    sectionList[listOrder] = {
        key: listOrder,
        ref: refList[listOrder],
        name: name,
    };
    return (
        <section
            name={name}
            key={listOrder}
            ref={refList[listOrder]}
            style={style}
        >
            {children}
        </section>
    );
};

export default Section;
