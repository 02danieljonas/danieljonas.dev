import React from "react";

const NavbarElement = ({ sections }) => {
    return (
        <>
            {sections.map(function (data) {
                return <div key={data} id={data}> {data} </div>;
            })}
        </>
    );
};

export default NavbarElement;
