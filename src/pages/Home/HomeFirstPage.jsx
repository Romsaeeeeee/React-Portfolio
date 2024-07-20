import myImage from "../../assets/IMG_20200808_195723_565.jpg";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { MdWavingHand } from "react-icons/md";

const HomeFirstPage = () => {
  return (
    <div className="h-full w-full flex flex-col gap-8 justify-center items-center bg-black text-white">
      <div className="flex justify-center items-center gap-10 tablet:gap-5">
        <div className="flip-horizontal">
          <MdWavingHand className="text-7xl animate-wave tablet:text-5xl" />
        </div>
        <img src={myImage} className="h-80 rounded-full tablet:h-60" />
        <div>
          <MdWavingHand className="text-7xl animate animate-wave tablet:text-5xl" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="text-7xl tablet:text-5xl font-League-Gothic">
          JAYCEE BAUTISTA
        </p>
        <p className="text-3xl tracking-[15px] tablet:text-xl tablet:tracking-[5px]">
          FRONT-END DEVELOPER
        </p>
      </div>
    </div>
  );
};

export default HomeFirstPage;
