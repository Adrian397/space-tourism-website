import Header from "../components/Header/Header";
import Planets from "../components/Planets/Planets";
import styles from "./Destination.module.css";
import ChoosePlanet from "../components/Planets/ChoosePlanet";
import { useContext } from "react";
import { PlanetContext } from "../store/planet-context";
import Title from "../components/Title/Title";

const Destination = () => {
  const ctx = useContext(PlanetContext);

  return (
    <div className={styles.body}>
      <Header />
      <Title number="01" title="pick your destination" />
      <main className={styles.main}>
        {ctx.activePlanet && <Planets img={ctx.activePlanet.img} />}
        {ctx.activePlanet && (
          <ChoosePlanet
            name={ctx.activePlanet.name}
            text={ctx.activePlanet.desc}
            distance={ctx.activePlanet.dist}
            time={ctx.activePlanet.travel}
          />
        )}
      </main>
    </div>
  );
};

export default Destination;
