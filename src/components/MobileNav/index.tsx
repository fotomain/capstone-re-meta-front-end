import { useState, FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Menu } from "./styles";
import logoImg from "../../assets/logo_main.svg";
import menuImg from "../../assets/hamburger_menu_icon.svg";
import basketImg from "../../assets/basket.svg";
import closeImg from "../../assets/close.svg";

const MobileNav: FC<HTMLAttributes<HTMLElement>> = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(prevValue => !prevValue);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Container {...props}>
      <ul>
        <li>
          <button aria-label="Open menu" onClick={handleMenu}>
            <img src={menuImg} alt="Open menu" />
          </button>
        </li>
        <li> <img className="basketIcon" src={basketImg} alt="Basket" /> </li>
      </ul>

      <Menu className={menuOpen ? "opened" : ""}>
        <button aria-label="Close menu" onClick={handleMenu}>
          <img src={closeImg} alt="Close menu" />
        </button>
        <ul>
          <li> <img src={logoImg} alt="Little Lemon Logo" /> </li>
          <li> <HashLink to="/" onClick={closeMenu}>Home</HashLink> </li>
          <li> <HashLink to="#about" onClick={closeMenu}>About</HashLink> </li>
          <li> <HashLink to="#menu" onClick={closeMenu}>Menu</HashLink> </li>
          <li> <HashLink to="/bookings" onClick={closeMenu}>Reservations</HashLink> </li>
          <li className="orderBtn"> <HashLink role="button" to="#" onClick={closeMenu}>Order Online</HashLink> </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default MobileNav;