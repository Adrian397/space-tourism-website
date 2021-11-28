import { useEffect, useState } from "react";
import React from "react";

export const CrewContext = React.createContext({
  crew: [],
  activeCrew: undefined,
  activeButton: undefined,
  setCrew: () => {},
  onChooseFirstPerson: () => {},
  onChooseSecondPerson: () => {},
  onChooseThirdPerson: () => {},
  onChooseFourthPerson: () => {},
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
  });

  useEffect(() => {
    if (!activeCrew && crew.length > 0) {
      setActiveCrew(crew[0]);
      setActiveButton("first-person");
    }
  }, [activeCrew, crew]);

  const setFirstPerson = () => {
    setActiveCrew(crew[0]);
    setActiveButton("first-person");
  };

  const setSecondPerson = () => {
    setActiveCrew(crew[1]);
    setActiveButton("second-person");
  };

  const setThirdPerson = () => {
    setActiveCrew(crew[2]);
    setActiveButton("third-person");
  };

  const setFourthPerson = () => {
    setActiveCrew(crew[3]);
    setActiveButton("fourth-person");
  };

  return (
    <CrewContext.Provider
      value={{
        crew: crew,
        activeCrew: activeCrew,
        activeButton: activeButton,
        setCrew: setCrew,
        onChooseFirstPerson: setFirstPerson,
        onChooseSecondPerson: setSecondPerson,
        onChooseThirdPerson: setThirdPerson,
        onChooseFourthPerson: setFourthPerson,
      }}
    >
      {props.children}
    </CrewContext.Provider>
  );
};

export default CrewContextProvider;
