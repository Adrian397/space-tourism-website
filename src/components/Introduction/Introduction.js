import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles["introduction-container"]}>
      <div className={styles.introduction}>
        <h3>SO, YOU WANT TO TRAVEL TO</h3>
        <h1>SPACE</h1>
        <p>
          <span>
            Let’s face it; if you want to go to space, you might as well
          </span>
          <span>genuinely go to outer space and not hover kind of on the</span>
          <span>
            edge of it. Well sit back, and relax because we’ll give you a
          </span>
          <span> truly out of this world experience!</span>
        </p>
      </div>
    </div>
  );
};

export default Introduction;
