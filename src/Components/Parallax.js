import { useRef } from "react";
import pen from "../Images/pen.jpg";
import cat from "../Images/cat.gif";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function PalallaxTest() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={6} ref={ref}>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${pen})`,
            backgroundSize: "55%",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${pen})`,
            backgroundSize: "65%",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${pen})`,
            backgroundSize: "85%",
          }}
        />

        <ParallaxLayer
          sticky={{ start: 0.0, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={cat} alt="" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Hi Mom!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default PalallaxTest;
