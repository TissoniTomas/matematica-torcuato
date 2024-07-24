import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from 'keep-react';
import logo from "../../assets/logo.jpeg";
import { FaShoppingCart } from "react-icons/fa";
import { Divider } from 'keep-react';
import { ModeContext } from '../../context/ModeContext';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useContext } from 'react';

const NavBarPage = () => {
  const { mode, setMode } = useContext(ModeContext);

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Navbar>
        <NavbarContainer className='lg:ml-36'>
          <NavbarList>
            <Link to="/cursos">
              <NavbarItem>Cursos</NavbarItem>
            </Link>
            <Link to="/reserva">
              <NavbarItem>Reserva tu clase</NavbarItem>
            </Link>
            <Link to="/contacto">
              <NavbarItem>Contact</NavbarItem>
            </Link>
          </NavbarList>
          <NavbarBrand>
            <Link to="/">
              <img className='w-40' src={logo} alt="keep" />
            </Link>
          </NavbarBrand>
          <NavbarList>
            <Link to="/iniciar-sesion">
              <NavbarItem>Iniciar Sesion</NavbarItem>
            </Link>
            <Link to="/registrarse">
              <NavbarItem>Registrarse</NavbarItem>
            </Link>
            <NavbarItem>
              <FaShoppingCart size={26} color='blue' />
            </NavbarItem>
            <NavbarItem onClick={toggleMode}>
              {mode === "light" ? <MdLightMode size={26} /> : <MdDarkMode size={26} />}
            </NavbarItem>
          </NavbarList>
          <NavbarCollapseBtn />
          <NavbarCollapse>
            <Link to="/cursos">
              <NavbarItem>Cursos</NavbarItem>
            </Link>
            <Link to="/reserva">
              <NavbarItem>Reserva tu clase</NavbarItem>
            </Link>
            <Link to="/contacto">
              <NavbarItem>Contact</NavbarItem>
            </Link>
            <Link to="/iniciar-sesion">
              <NavbarItem>Iniciar Sesion</NavbarItem>
            </Link>
            <Link to="/registrarse">
              <NavbarItem>Registrarse</NavbarItem>
            </Link>
            <NavbarItem>
              <FaShoppingCart size={26} color='blue' />
            </NavbarItem>
            <NavbarItem onClick={toggleMode}>
              {mode === "light" ? <MdLightMode size={26} /> : <MdDarkMode size={26} />}
            </NavbarItem>
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
      <div className='px-20'>
        <Divider color="error" />
      </div>
    </div>
  );
};

export default NavBarPage;
