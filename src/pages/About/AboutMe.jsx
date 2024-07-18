import myImage from "../../assets/IMG_20200808_195723_565.jpg";
import { Footer } from "../../modal/Footer";

const AboutMe = () => {
  return (
    <div className="h-full w-full bg-black text-white">
      <div className="h-full w-full flex flex-col justify-center items-center gap-8">
        <img src={myImage} className="h-80 rounded-full "></img>
        <div className="flex flex-col justify-center items-center">
          <p className="text-7xl tablet:text-5xl font-League-Gothic">
            ABOUT ME
          </p>
          <p className="text-3xl tracking-[15px] tablet:text-xl tablet:tracking-[5px] font">
            {"IT'S ME, JAYCEE!"}
          </p>
        </div>
      </div>
      <div className="h-full w-full flex flex-col gap-20 py-20 justify-start items-start text-black">
        <div className="flex flex-col justify-start items-start gap-5 px-40 tablet:w-full tablet:px-10 tablet:items-center">
          <p className="text-4xl font-bold">My Background</p>
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            tempore. Quasi animi unde distinctio inventore numquam facere
            tempora praesentium, nam quam eaque voluptates itaque minima
            aperiam, ducimus, tenetur atque? Distinctio.
          </p>
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            tempore. Quasi animi unde distinctio inventore numquam facere
            tempora praesentium, nam quam eaque voluptates itaque minima
            aperiam, ducimus, tenetur atque? Distinctio.
          </p>
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            tempore. Quasi animi unde distinctio inventore numquam facere
            tempora praesentium, nam quam eaque voluptates itaque minima
            aperiam, ducimus, tenetur atque? Distinctio.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-5 px-40 tablet:w-full tablet:px-10 tablet:items-center">
          <p className="text-4xl font-bold">My Hobbies</p>
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            tempore. Quasi animi unde distinctio inventore numquam facere
            tempora praesentium, nam quam eaque voluptates itaque minima
            aperiam, ducimus, tenetur atque? Distinctio.
          </p>
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            tempore. Quasi animi unde distinctio inventore numquam facere
            tempora praesentium, nam quam eaque voluptates itaque minima
            aperiam, ducimus, tenetur atque? Distinctio.
          </p>
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            tempore. Quasi animi unde distinctio inventore numquam facere
            tempora praesentium, nam quam eaque voluptates itaque minima
            aperiam, ducimus, tenetur atque? Distinctio.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutMe;