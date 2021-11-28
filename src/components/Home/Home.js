import ExploreButton from "../UI/ExploreButton/ExploreButton";
import Introduction from "../Introduction/Introduction";
import Header from "../Header/Header";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <Introduction />
        <ExploreButton />
      </div>
    </>
  );
};

export default Home;
