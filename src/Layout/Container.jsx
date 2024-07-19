import { Outlet } from "react-router-dom";
import MenuPage from "../pages/MenuPage";
import { useState } from "react";

export default function Container() {
  const [showMenuPage, setShowMenuPage] = useState(true);
  const handleLinkClick = () => {
    setShowMenuPage(false);
  };

  return (
    <div className="w-screen h-screen overflow-y-visible">
      <div className="h-full w-full ">
        {showMenuPage ? <MenuPage onLinkClick={handleLinkClick} /> : <Outlet />}
      </div>
    </div>
  );
}
