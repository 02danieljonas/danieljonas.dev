import React from "react";
import Section from "../Section";

const About = ({ refList, sectionList }) => {
    return (
        <Section
            name="About"
            listOrder="1"
            refList={refList}
            sectionList={sectionList}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ipsum libero, pretium eget est in, fermentum blandit mi. Curabitur
            luctus feugiat luctus. Morbi vitae lorem ultricies, elementum elit
            ut, ultricies libero. Etiam malesuada interdum volutpat.
            Pellentesque placerat aliquet libero, at mollis nibh accumsan a.
            Fusce quis ligula sem. Fusce tempus felis vel nulla varius cursus.
            Maecenas elementum nibh neque, sit amet pulvinar diam malesuada
            sodales. Nunc nec suscipit lectus, sit amet dapibus erat. Fusce nec
            tellus ut enim convallis ullamcorper. Integer vitae pellentesque
            nunc. Vivamus mattis magna a erat ultricies, sit amet tincidunt enim
            aliquet. Praesent congue laoreet ex. Mauris interdum malesuada orci
            eu feugiat. Sed rutrum tempus ex sit amet efficitur.
        </Section>
    );
};

export default About;
