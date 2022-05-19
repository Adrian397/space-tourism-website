import styles from "./RocketContent.module.css";
import { useContext } from "react";
import { TechnologyContext } from "../../store/technology-context";

const RocketContent = (props) => {
  const ctx = useContext(TechnologyContext);

  return (
    <div className={styles.content}>
      <div className={styles["content-numbers"]}>
        <button
          id="0"
          className={
            ctx.activeButton === "launch-vehicle"
              ? styles.active
              : styles["not-active"]
          }
          onClick={ctx.setSpaceTechnology}
        >
          1
        </button>
        <button
          id="1"
          className={
            ctx.activeButton === "space-port"
              ? styles.active
              : styles["not-active"]
          }
          onClick={ctx.setSpaceTechnology}
        >
          2
        </button>
        <button
          id="2"
          className={
            ctx.activeButton === "space-capsule"
              ? styles.active
              : styles["not-active"]
          }
          onClick={ctx.setSpaceTechnology}
        >
          3
        </button>
      </div>
      <div className={styles.text}>
        <p>The Terminology...</p>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default RocketContent;
