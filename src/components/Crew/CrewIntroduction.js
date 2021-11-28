import styles from "./CrewIntroduction.module.css";
import { CrewContext } from "../../store/crew-context";
import { useContext } from "react/cjs/react.development";

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
          className={
            ctx.activeButton === "first-person"
              ? styles.active
              : styles["not-active"]
          }
          onClick={ctx.onChooseFirstPerson}
        ></button>
        <button
          className={
            ctx.activeButton === "second-person"
              ? styles.active
              : styles["not-active"]
          }
          onClick={ctx.onChooseSecondPerson}
        ></button>
        <button
          className={
            ctx.activeButton === "third-person"
              ? styles.active
              : styles["not-active"]
          }
          onClick={ctx.onChooseThirdPerson}
        ></button>
        <button
          className={
            ctx.activeButton === "fourth-person"
              ? styles.active
              : styles["not-active"]
          }
          onClick={ctx.onChooseFourthPerson}
        ></button>
      </div>
    </div>
  );
};

export default CrewIntroduction;
