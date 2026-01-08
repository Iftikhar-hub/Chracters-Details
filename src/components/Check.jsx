import { useEffect, useState } from "react";
import txt from "../assets/txt.svg";
import Union from "../assets/Union.svg";
import { handleScrollAnimation } from "../utils/animation";

const Check = () => {
  const [circleStyle, setCircleStyle] = useState({});
  const [unionZ, setUnionZ] = useState(30);

  useEffect(() => {
    const onScroll = () =>
      handleScrollAnimation(setCircleStyle, setUnionZ);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative h-[150vh]">

      <div className="header w-full py-10 sticky top-0 bg-black z-10"></div>

      <img
        src={txt}
        alt="Text"
        className="fixed top-5 left-[40%] z-30 pointer-events-none"
      />

      <div className="w-full mt-32 flex justify-center relative">

        <div
          className="
            fixed w-40 h-40 rounded-full bg-[#FE6047] z-20
            transition-transform duration-600 ease-out left-135
          "
          style={circleStyle}
        />
        <img
          src={Union}
          alt="Union"
          className="w-full transition-all mt-12 duration-300"
          style={{ zIndex: unionZ }}
        />
      </div>

      <div className="w-full bg-amber-800 h-100 flex justify-center items-center">
        <p className="text-white font-extrabold text-[48px]">
          Scroll Me
        </p>
      </div>
    </div>
  );
};

export default Check;
