export const Skills = ({ icon, label }) => {
  return (
    <div className="w-60 h-80 flex flex-col justify-between items-center py-3 bg-black rounded-md ">
      <span className="">{icon}</span>
      <p className="text-3xl font-medium tracking-widest text-white">{label}</p>
    </div>
  );
};
