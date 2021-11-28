import styles from "./Planets.module.css";

const Planets = (props) => {
  return <img className={styles.planets} src={props.img} alt="planet"></img>;
};

export default Planets;
