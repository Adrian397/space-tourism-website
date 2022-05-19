import styles from "./CrewIntroduction.module.css";
import { CrewContext } from "../../store/crew-context";
import { useContext } from "react";

const CrewIntroduction = (props) => {
  const ctx = useContext(CrewContext);

  return (
    <div className={styles["crew-introduction"]}>
      <div>
        <h2>{props.proffesion}</h2>
        <h1>{props.name}</h1>
        <p>{props.introduction}</p>
      </div>
      <div className={styles.buttons}>
        <button
          id="0"
          className={
            ctx.activeButton === "first-person"
              ? styles.active
              : styles["not-active"]
          }
          onClick={ctx.showPersonHandler}
        ></button>
        <button
          id="1"
          className={
            ctx.activeButton === "second-person"
              ? styles.active
              : styles["not-active"]
          }
          onClick={ctx.showPersonHandler}
        ></button>
        <button
          id="2"
          className={
            ctx.activeButton === "third-person"
              ? styles.active
              : styles["not-active"]
          }
          onClick={ctx.showPersonHandler}
        ></button>
        <button
          id="3"
          className={
            ctx.activeButton === "fourth-person"
              ? styles.active
              : styles["not-active"]
          }
          onClick={ctx.showPersonHandler}
        ></button>
      </div>
    </div>
  );
};

export default CrewIntroduction;
