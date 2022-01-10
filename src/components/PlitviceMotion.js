import { useImperativeHandle, useState, forwardRef } from "react";
import { Mobile, PC } from "../Info/MediaQuery";

const PlitviceMotion = forwardRef((props, ref) => {
  const [transform, setTransform] = useState(false);
  let dynamicSrc = "img/motion/일반.gif";
  let dynamicTransForm = -1;

  useImperativeHandle(ref, () => ({
    AnimateDance: () => {
      props.setPlitviceAni(true);
      setTimeout(() => setTransform(true), 1500);
      setTimeout(() => setTransform(false), 2500);
      setTimeout(() => setTransform(true), 3500);
      setTimeout(() => setTransform(false), 4500);
      setTimeout(() => props.setPlitviceAni(false), 4500);
    },
  }));

  if (props.plitviceAni) {
    dynamicSrc = "img/motion/댄스.gif";
  } else {
    dynamicSrc = "img/motion/일반.gif";
  }

  if (transform) {
    dynamicTransForm = 1;
  } else {
    dynamicTransForm = -1;
  }

  return (
    <>
      <PC>
        <img
          alt="플비"
          style={{
            position: "relative",
            left: "55%",
            top: "420px",
            transform: `scaleX(${dynamicTransForm})`,
          }}
          width="100"
          height="100"
          src={dynamicSrc}
        />
      </PC>
      <Mobile>
      <img
          alt="플비"
          style={{
            position: "relative",
            left: "60%",
            top: "330px",
            transform: `scaleX(${dynamicTransForm})`,
          }}
          width="100"
          height="100"
          src={dynamicSrc}
        />

      </Mobile>
    </>
  );
});

export default PlitviceMotion;
