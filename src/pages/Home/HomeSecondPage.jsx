import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaReact } from "react-icons/fa";

const HomeSecondPage = () => {
  const skills = [
    { icon: <FaHtml5 />, label: "HTML", color: "#e54d27" },
    { icon: <FaCss3Alt />, label: "CSS", color: "#2965f1" },
    { icon: <FaJs />, label: "JavaScript", color: "#f7df1e" },
    { icon: <FaReact />, label: "ReactJS", color: "#61dafb" },
    { icon: <FaGitAlt />, label: "Git", color: "#f05032" },
  ];
  return (
    <div className="h-full w-full flex flex-col gap-20 py-20 justify-start items-start tablet:gap-10">
      <div className="flex flex-col justify-start items-start gap-5 px-52 tablet:w-full tablet:px-10">
        <p className="text-4xl font-bold">About me</p>
        <p className="text-xl text-justify">
          I'm Jaycee P. Bautista, an aspiring web developer with a passion for
          creating dynamic and responsive websites. I have a strong foundation
          in HTML5, CSS3, and JavaScript, and I am continuously learning and
          expanding my skill set to keep up with the ever-evolving world of web
          development. My goal is to work with a reputable company where I can
          contribute my knowledge and skills while growing as a professional.
        </p>
      </div>
      <div className="flex flex-col justify-start items-start px-52 tablet:w-full tablet:px-10">
        <p className="text-4xl font-bold">My Skills</p>
      </div>
    </div>
  );
};

export default HomeSecondPage;
