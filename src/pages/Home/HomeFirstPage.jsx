import React from "react";
import myImage from "../../assets/IMG_20200808_195723_565.jpg";

const HomeFirstPage = () => {
  return (
    <div className="h-full w-full flex flex-col gap-8 justify-center items-center bg-black text-white">
      <img src={myImage} className="h-80 rounded-full"></img>
      <div className="flex flex-col justify-center items-center">
        <p className="text-6xl tablet:text-5xl">JAYCEE BAUTISTA</p>
        <p className="text-2xl tracking-[15px] tablet:text-xl tablet:tracking-[5px]">
          FRONT-END DEVELOPER
        </p>
      </div>
    </div>
  );
};

export default HomeFirstPage;
