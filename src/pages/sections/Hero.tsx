import React from "react";
import Image from "next/image";
import Feat from "../../../public/feat1.jpg";

const Hero = () => {
  return (
    <div className="w-full self-end px-4 lg:w-1/2">
      <div className="mt-10 lg:mt-0"></div>
      <Image
        src={Feat}
        alt="tes"
        className="rounded-lg shadow-lg max-w-full mx-auto "
      />
    </div>
  );
};

export default Hero;
