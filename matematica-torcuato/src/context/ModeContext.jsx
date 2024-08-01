import { createContext, useState } from 'react';
export const ModeContext = createContext();
export const ModeContextProvider = ({ children }) => {
const [mode, setMode] = useState("");
return (
<ModeContext.Provider value={{ mode, setMode }}>{children}</ModeContext.Provider>
);
};

// const { mode, setMode } = useContext(ModeContext);

//   const toggleMode = () => {
//     setMode(mode === "light" ? "dark" : "light");
//   };

// <NavbarItem onClick={toggleMode}>
// {mode === "light" ? <MdLightMode size={26} /> : <MdDarkMode size={26} />}
// </NavbarItem>