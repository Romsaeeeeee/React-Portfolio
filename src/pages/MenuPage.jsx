import { FaFacebook, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const links = [
  {
    path: "/home",
    label: "HOME",
  },
  { path: "/projects", label: "PROJECTS" },
  { path: "/about", label: "ABOUT" },
  { path: "/contact", label: "CONTACT" },
];

const socialMedia = [
  { icon: <FaInstagram />, link: "https://www.instagram.com/jycbtst/" },
  { icon: <FaFacebook />, link: "https://www.facebook.com/JYCBTST" },
  { icon: <FaGithub />, link: "https://github.com/Romsaeeeeee" },
  { icon: <FaTelegram />, link: "https://github.com/Romsaeeeeee" }]

const MenuPage = ({ onLinkClick }) => {
  return (
    <div className="h-full w-full flex justify-center items-center gap-60 tablet:flex-col tablet:gap-0">
      <div className="flex flex-col justify-start items-start gap-4 tablet:items-center">
        {links &&
          links.map((item, index) => (
            <div
              key={index}
              className="pt-2.5 px-3 text-6xl text-black font-bold hover:bg-black hover:text-white hover:rounded-md animate-slideInFromLeft">
              <NavLink onClick={onLinkClick} to={item?.path}>
                {item?.label}
              </NavLink>
            </div>
          ))}
      </div>
      <div className="flex flex-col justify-end items-start gap-5 pt-36 text-xl font-semibold tablet:items-center animate-slideInRight">
        <p className="cursor-default">jayceebautista0929@gmail.com</p>
        <p className="cursor-default">+63 912-3919-789</p>
        <div className="flex justify-center items-center gap-4">
          {socialMedia.map((item, index) => (
            <a key={index} href={item?.link} target="_blank" >
              {item?.icon}
            </a>
          ))}
        </div>
      </div>
    </div >
  );
};

export default MenuPage;
