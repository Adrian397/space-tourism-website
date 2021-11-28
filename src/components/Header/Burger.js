import styles from "./Burger.module.css";
import { useContext } from "react";
import { PlanetContext } from "../../store/planet-context";

const Burger = () => {
  const ctx = useContext(PlanetContext);

  return (
    <svg
      className={styles.burger}
      onClick={ctx.onClickMenu}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="21"
    >
      <g fill="#D0D6F9" fillRule="evenodd">
        <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
      </g>
    </svg>
  );
};

export default Burger;
