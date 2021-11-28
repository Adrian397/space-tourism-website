import Logo from "../UI/Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";
import Burger from "./Burger";
import Cross from "./Cross";
import { useContext } from "react";
import { PlanetContext } from "../../store/planet-context";

const Header = () => {
  const ctx = useContext(PlanetContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.nav}>
        <Navigation />
        {!ctx.isClicked && <Burger />}
        {ctx.isClicked && <Cross />}
      </div>
    </header>
  );
};

export default Header;
