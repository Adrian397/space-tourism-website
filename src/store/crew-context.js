import { useEffect, useState } from "react";
import React from "react";

export const CrewContext = React.createContext({
  crew: [],
  activeCrew: undefined,
  activeButton: undefined,
  setCrew: () => {},
  showPersonHandler: () => {},
});

const CrewContextProvider = (props) => {
  const [crew, setCrew] = useState([]);
  const [activeCrew, setActiveCrew] = useState();
  const [activeButton, setActiveButton] = useState();

  useEffect(() => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedData = data.crew.map((crew) => {
          return {
            name: crew.name,
            img: crew.images.png,
            role: crew.role,
            bio: crew.bio,
          };
        });
        setCrew(transformedData);
      });
  }, []);

  useEffect(() => {
    if (!activeCrew && crew.length > 0) {
      setActiveCrew(crew[0]);
      setActiveButton("first-person");
    }
  }, [activeCrew, crew]);

  const showPersonHandler = (e) => {
    if (e.target.id === "0") {
      setActiveCrew(crew[0]);
      setActiveButton("first-person");
    } else if (e.target.id === "1") {
      setActiveCrew(crew[1]);
      setActiveButton("second-person");
    } else if (e.target.id === "2") {
      setActiveCrew(crew[2]);
      setActiveButton("third-person");
    } else if (e.target.id === "3") {
      setActiveCrew(crew[3]);
      setActiveButton("fourth-person");
    }
  };

  return (
    <CrewContext.Provider
      value={{
        crew,
        activeCrew,
        activeButton,
        setCrew,
        showPersonHandler,
      }}
    >
      {props.children}
    </CrewContext.Provider>
  );
};

export default CrewContextProvider;
