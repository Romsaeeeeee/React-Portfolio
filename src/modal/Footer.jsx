import { NavLink } from "react-router-dom";

export const Footer = ({ label1, label2, label3, path1, path2, path3 }) => {
  return (
    <div className="h-40 w-full flex justify-evenly items-start py-14 bg-black text-white tablet:flex-col tablet:items-center tablet:gap-5 tablet:py-10">
      <div className="flex justify-center items-center gap-5">
        <NavLink to={path1}>{label1}</NavLink>
        <NavLink to={path2}>{label2} </NavLink>
        <NavLink to={path3}>{label3}</NavLink>
      </div>
      <div className="flex flex-col justify-center items-start gap-2 tablet:items-center">
        <p>jayceebautista0929@gmail.com</p>
        <p>+63 912-3919-789</p>
      </div>
    </div>
  );
};
