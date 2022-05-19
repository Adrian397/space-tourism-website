import styles from "./Crew.module.css";
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import CrewIntroduction from "../components/Crew/CrewIntroduction";
import CrewStaff from "../components/Crew/CrewStaff";
import { useContext } from "react";
import { CrewContext } from "../store/crew-context";

const Crew = () => {
  const ctx = useContext(CrewContext);

  return (
    <div className={styles.body}>
      <Header />

      <Title number="02" title="meet your crew" />
      <main className={styles.main}>
        {ctx.activeCrew && (
          <CrewIntroduction
            proffesion={ctx.activeCrew.role}
            introduction={ctx.activeCrew.bio}
            name={ctx.activeCrew.name}
          />
        )}
        {ctx.activeCrew && <CrewStaff img={ctx.activeCrew.img} />}
      </main>
    </div>
  );
};

export default Crew;
