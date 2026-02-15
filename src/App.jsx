import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Prof from "./pages/Prof";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/Music"} element={<About />}></Route>
        <Route path={"/prof"} element={<Prof />}></Route>
        <Route path={"/shop"} element={<Shop />}></Route>
        <Route path={"/contact"} element={<Contact />}></Route>
      </Routes>
    </AppLayout>
  );
}

export default App;
