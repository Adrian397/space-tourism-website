import styles from "./CrewStaff.module.css";

const CrewStaff = (props) => {
  return (
    <div className={styles["img-container"]}>
      <img className={styles.img} src={props.img} alt="crew" />
    </div>
  );
};

export default CrewStaff;
