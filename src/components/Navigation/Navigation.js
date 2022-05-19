import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import Line from "../UI/Line/Line";
import { PlanetContext } from "../../store/planet-context";
import { useContext } from "react";

const Navigation = () => {
  const ctx = useContext(PlanetContext);

  const navMobileActiveClass = ctx.isClicked ? styles.active : null;

  return (
    <nav className={`${styles.nav} ${navMobileActiveClass}`}>
      <Line />
      <ul>
        <li>
          <NavLink to="/home" onClick={ctx.closeMenu}>
            <span>00</span>HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destination"
            activeClassName={styles.selected}
            onClick={ctx.closeMenu}
          >
            <span>01</span>DESTINATION
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/crew"
            activeClassName={styles.selected}
            onClick={ctx.closeMenu}
          >
            <span>02</span>CREW
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/technology"
            activeClassName={styles.selected}
            onClick={ctx.closeMenu}
          >
            <span>03</span>TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
