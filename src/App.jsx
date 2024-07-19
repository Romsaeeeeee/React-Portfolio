import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AboutMe from "./pages/About/AboutMe";
import ContactMe from "./pages/Contact/ContactMe";
import HomePage from "./pages/Home/HomePage";
// import MenuPage from "./pages/MenuPage";
import Container from "./Layout/Container";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      onUpdate={() => window.scrollTo(0, 0)}
      path="/"
      element={<Container />}
    >
      {/* HOME PAGE */}
      <Route path="home" element={<HomePage />}></Route>
      {/* ABOUT PAGE */}
      <Route path="about" element={<AboutMe />}></Route>
      {/* CONTACT PAGE */}
      <Route path="contact" element={<ContactMe />}></Route>
      <Route path="projects" element={<ContactMe />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
