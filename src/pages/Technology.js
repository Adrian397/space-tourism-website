import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import styles from "./Technology.module.css";
import Rocket from "../components/Rockets/Rocket";
import RocketContent from "../components/Rockets/RocketContent";
import { TechnologyContext } from "../store/technology-context";
import { useState, useEffect, useContext } from "react";

const Technology = () => {
  const ctx = useContext(TechnologyContext);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div className={styles.body}>
      <Header />
      <Title number="03" title="space launch 101" />
      <main className={styles.main}>
        {ctx.activeTechnology && (
          <RocketContent
            text={ctx.activeTechnology.desc}
            title={ctx.activeTechnology.name}
          />
        )}
        {ctx.activeTechnology && width > 900 && (
          <Rocket img={ctx.activeTechnology.img} />
        )}
        {ctx.activeTechnology && width <= 900 && (
          <Rocket img={ctx.activeTechnology.imgMobile} />
        )}
      </main>
    </div>
  );
};

export default Technology;
