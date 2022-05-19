import styles from "./ChoosePlanet.module.css";
import { useContext } from "react";
import { PlanetContext } from "../../store/planet-context";

const ChoosePlanet = (props) => {
  const ctx = useContext(PlanetContext);

  return (
    <div className={styles.planetDescription}>
      <div className={styles.buttons}>
        <button
          className={
            ctx.activeButton === "moon" ? styles.active : styles["not-active"]
          }
          onClick={ctx.setPlanetHandler}
          id="0"
        >
          MOON
        </button>
        <button
          className={
            ctx.activeButton === "mars" ? styles.active : styles["not-active"]
          }
          onClick={ctx.setPlanetHandler}
          id="1"
        >
          MARS
        </button>
        <button
          className={
            ctx.activeButton === "europa" ? styles.active : styles["not-active"]
          }
          onClick={ctx.setPlanetHandler}
          id="2"
        >
          EUROPA
        </button>
        <button
          className={
            ctx.activeButton === "titan" ? styles.active : styles["not-active"]
          }
          onClick={ctx.setPlanetHandler}
          id="3"
        >
          TITAN
        </button>
      </div>
      {ctx.activePlanet && (
        <>
          <h1>{props.name}</h1>
          <p className={styles.text}>{props.text}</p>
          <div className={styles.facts}>
            <div>
              <p className={styles.distance}>AVG. DISTANCE</p>
              <p>{props.distance}</p>
            </div>
            <div>
              <p>AVG. DISTANCE</p>
              <p>{props.time}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChoosePlanet;
