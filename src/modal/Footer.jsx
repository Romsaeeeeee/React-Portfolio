export const Footer = () => {
  return (
    <div className="h-40 w-full flex justify-evenly items-start py-14 bg-black text-white tablet:flex-col tablet:items-center tablet:gap-5">
      <div className="flex justify-center items-center gap-5">
        <p>PROJECTS</p>
        <p>ABOUT ME</p>
        <p>CONTACT</p>
      </div>
      <div className="flex flex-col justify-center items-start gap-2 tablet:items-center">
        <p>jayceebautista0929@gmail.com</p>
        <p>+63 912-3919-789</p>
      </div>
    </div>
  );
};
