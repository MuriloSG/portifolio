import styles from "./Header.module.css";
import Logo from "../Logo/index";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <header className={styles.header}>
      <Link to="/">
        <span>
          <Logo />
        </span>
      </Link>

      <nav
        className={`${styles.menuSanduich} ${showMenu ? styles.show : ""}`}
        onClick={toggleMenu}
      >
        <ul className={`${styles.navbar} ${showMenu && styles.show}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
      <div
        className={`${styles.navToggle} ${showMenu && styles.open}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
      </div>
    </header>
  );
};

export default Header;
