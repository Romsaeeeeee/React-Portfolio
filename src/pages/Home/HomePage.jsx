import { useEffect } from "react";
import HomeFirstPage from "./HomeFirstPage";
import HomeSecondPage from "./HomeSecondPage";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="w-full h-full">
      <HomeFirstPage />
      <HomeSecondPage />
    </div>
  );
};

export default HomePage;
