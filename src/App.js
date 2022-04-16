import Navbar from "./components/Navbar";
import { useRef, useState } from "react";

function App() {
    const refList = [];
    refList.push(useRef(null)); //copy paste this for every new section
    refList.push(useRef(null));
    refList.push(useRef(null));
    refList.push(useRef(null));

    const sections = [
        <section key="Home0" ref={refList[0]}style={{
            position: "absolute",
            top: 0
        }}>
            Home
        </section>,
        <section key="About1" ref={refList[1]}>
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
        </section>,
        <section key="section2" ref={refList[2]}>
            Ut suscipit dui ac risus sagittis, a venenatis dui faucibus.
            Pellentesque sit amet aliquam metus, ut hendrerit augue. Donec
            consequat id risus in fermentum. Sed mollis, odio in viverra
            ullamcorper, ante magna semper urna, sit amet placerat turpis enim
            id nisi. Sed vel porta metus, a aliquam sem. Vivamus at augue vel
            ligula sagittis vestibulum. Quisque euismod ullamcorper est id
            venenatis. Aliquam rutrum aliquet erat sed sodales. Pellentesque
            consequat quam rutrum pretium maximus. Sed consectetur, urna nec
            scelerisque elementum, elit nisl euismod libero, eget finibus urna
            augue eu felis. Ut suscipit volutpat dapibus.
        </section>,
        <section key="section3" ref={refList[3]}>
            Etiam vitae fringilla felis, sed blandit dolor. In aliquet risus
            felis, non tempor dolor gravida non. Duis eu elit maximus, lobortis
            nibh ut, commodo purus. Praesent condimentum est velit, in faucibus
            ex tincidunt semper. Vivamus non nisl et libero pharetra euismod non
            in lectus. Donec at arcu maximus, pulvinar ligula vel, vulputate
            lectus. Phasellus efficitur bibendum lacus, eget pulvinar nulla
            tincidunt eget. Pellentesque massa sem, aliquet sed rutrum sed,
            commodo mollis felis. Cras viverra porta volutpat. Mauris interdum
            vehicula urna, ac sollicitudin augue blandit ac. Mauris vulputate
            orci ipsum, nec rhoncus justo volutpat sed. Suspendisse blandit mi
            et sagittis dignissim.
        </section>,
    ];

    const scrollToRef = (target) => {
        window.scrollTo({
            top: refList[target.target.id.slice(-1)].current.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <div className="App">
            <Navbar
                sections={
                    sections.map((e) => {
                        return {key: e.key, ref: e.ref};
                    })
                }
                onClick={scrollToRef}
            />
            <main style={{ paddingTop: window.visualViewport.height }}>
                {sections}
            </main>
        </div>
    );
}

export default App;
