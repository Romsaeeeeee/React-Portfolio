import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden no-scrollbar">
      <MenuPage />
      <HomePage />
    </div>
  );
}

export default App;
