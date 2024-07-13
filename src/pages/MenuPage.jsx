import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const links = [
  {
    path: "/home",
    label: "HOME",
  },
  { path: "/projects", label: "PROJECTS" },
  { path: "/about", label: "ABOUT" },
  { path: "/contact", label: "CONTACT" },
];

const MenuPage = () => {
  return (
    <div className="relative h-full w-full flex justify-center items-center gap-60">
      <p className="text-xl font-semibold absolute top-[280px] left-[340px] -rotate-90">
        MENU
      </p>
      <div className="flex flex-col justify-start items-start gap-4">
        {links &&
          links.map((item, index) => (
            <div key={index}>
              <p className="text-6xl text-black font-semibold">{item?.label}</p>
            </div>
          ))}
      </div>
      <div className="flex flex-col justify-end items-start gap-5 pt-36 text-xl font-semibold">
        <p>jayceebautista0929@gmail.com</p>
        <p>+639-123-919-789</p>
        <div className="flex justify-center items-center gap-4">
          <FaInstagram />
          <FaFacebook />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
