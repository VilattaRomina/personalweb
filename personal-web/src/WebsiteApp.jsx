import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Form from "./pages/form/Form";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";

const WebsiteApp = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<Form />} />
          <Route path="/projectos" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default WebsiteApp;
