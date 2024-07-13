import { FaFacebook, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

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
    <div className="h-full w-full flex justify-center items-center gap-60 tablet:flex-col tablet:gap-0">
      <div className="flex flex-col justify-start items-start gap-4 tablet:items-center">
        {links &&
          links.map((item, index) => (
            <div key={index}>
              <p className="text-6xl text-black font-bold">{item?.label}</p>
            </div>
          ))}
      </div>
      <div className="flex flex-col justify-end items-start gap-5 pt-36 text-xl font-semibold  tablet:items-center">
        <p>jayceebautista0929@gmail.com</p>
        <p>+63 912-3919-789</p>
        <div className="flex justify-center items-center gap-4">
          <FaInstagram />
          <FaFacebook />
          <FaGithub />
          <FaTelegram />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
