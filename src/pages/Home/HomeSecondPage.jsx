import { Skills } from "../../modal/Skills";
import html from "../../assets/HTML5_Badge.svg.png";
import css from "../../assets/CSS3_logo.svg.png";
import javascript from "../../assets/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo-removebg-preview.png";
import react from "../../assets/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png";
import git from "../../assets/png-clipart-red-sign-logo-git-logo-icons-logos-emojis-tech-companies-thumbnail-removebg-preview.png";
import { Footer } from "../../modal/Footer";

const skills = [
  { label: "HTML", image: html },
  { label: "CSS", image: css },
  { label: "JavaScript", image: javascript },
  { label: "ReactJS", image: react },
  { label: "GIT", image: git },
];

const HomeSecondPage = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-20 py-20 justify-start items-start ">
        <div className="flex flex-col justify-start items-start gap-5 px-40 tablet:w-full tablet:px-10 tablet:items-center">
          <p className="text-4xl font-bold">About me</p>
          <p className="text-xl text-justify">
            I am an aspiring web developer with a passion for creating dynamic
            and responsive websites. I have a strong foundation in HTML5, CSS3,
            JavaScript, ReactJS, and Git, and I am continuously learning and
            expanding my skill set to keep up with the ever-evolving world of
            web development. My goal is to work with a reputable company where I
            can contribute my knowledge and skills while growing as a
            professional.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-5 px-40 tablet:w-full tablet:px-10 tablet:items-center">
          <p className="text-4xl font-bold">My Skills</p>
          <div className="flex justify-center items-center gap-5 tablet:flex-col">
            {skills &&
              skills.map((item, index) => (
                <Skills
                  key={index}
                  icon={<img src={item?.image} className="h-fit w-full" />}
                  label={item?.label}
                />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeSecondPage;
