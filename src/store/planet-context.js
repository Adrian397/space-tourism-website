import React from "react";
import { useState, useEffect } from "react";

export const PlanetContext = React.createContext({
  planets: [],
  activePlanet: undefined,
  activeButton: undefined,
  onChooseMoon: () => {},
  onChooseMars: () => {},
  onChooseEuropa: () => {},
  onChooseTitan: () => {},
});

const PlanetContextProvider = (props) => {
  const [planets, setPlanets] = useState([]);
  const [activePlanet, setActivePlanet] = useState();
  const [activeButton, setActiveButton] = useState();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedData = data.destinations.map((destination) => {
          return {
            name: destination.name,
            img: destination.images.png,
            desc: destination.description,
            dist: destination.distance,
            travel: destination.travel,
          };
        });
        setPlanets(transformedData);
      });
  }, []);

  useEffect(() => {
    if (!activePlanet && planets.length > 0) {
      setActivePlanet(planets[0]);
      setActiveButton("moon");
    }
  }, [activePlanet, planets]);

  const setMoonHandler = () => {
    setActivePlanet(planets[0]);
    setActiveButton("moon");
  };

  const setMarsHandler = () => {
    setActivePlanet(planets[1]);
    setActiveButton("mars");
  };

  const setEuropaHandler = () => {
    setActivePlanet(planets[2]);
    setActiveButton("europa");
  };

  const setTitanHandler = () => {
    setActivePlanet(planets[3]);
    setActiveButton("titan");
  };

  const menuClickHandler = () => {
    setIsClicked((currentState) => !currentState);
  };

  return (
    <PlanetContext.Provider
      value={{
        planets: planets,
        activePlanet: activePlanet,
        activeButton: activeButton,
        isClicked: isClicked,
        onChooseMoon: setMoonHandler,
        onChooseMars: setMarsHandler,
        onChooseEuropa: setEuropaHandler,
        onChooseTitan: setTitanHandler,
        onClickMenu: menuClickHandler,
      }}
    >
      {props.children}
    </PlanetContext.Provider>
  );
};

export default PlanetContextProvider;
