import styles from "./Title.module.css";

const Title = (props) => {
  return (
    <h2 className={styles.h2}>
      <span className={styles.number}>{props.number}</span>
      {props.title}
    </h2>
  );
};

export default Title;
