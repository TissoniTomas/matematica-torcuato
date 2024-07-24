import NavBarPage from "./components/NavBar/NavBar.jsx";
import HomePage from "./pages/HomePage";
import CursosPage from "./pages/CursosPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModeContextProvider } from "./context/ModeContext.jsx";


import "./index.css";

function App() {
  return (
    <>
    <ModeContextProvider>

        <Router>
          <NavBarPage />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cursos" element={<CursosPage />} />
          </Routes>
        </Router>
     
    </ModeContextProvider>
    </>
  );
}

export default App;
