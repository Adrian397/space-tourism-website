import React from "react";
import { useState, useEffect } from "react";

export const PlanetContext = React.createContext({
  planets: [],
  activePlanet: undefined,
  activeButton: undefined,
  setPlanetHandler: () => {},
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
            id: destination.id,
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

  const setPlanetHandler = (e) => {
    if (e.target.id === "0") {
      setActivePlanet(planets[0]);
      setActiveButton("moon");
    } else if (e.target.id === "1") {
      setActivePlanet(planets[1]);
      setActiveButton("mars");
    } else if (e.target.id === "2") {
      setActivePlanet(planets[2]);
      setActiveButton("europa");
    } else if (e.target.id === "3") {
      setActivePlanet(planets[3]);
      setActiveButton("titan");
    }
  };

  const menuClickHandler = () => {
    setIsClicked((currentState) => !currentState);
  };

  const closeMenu = () => {
    setIsClicked(false);
  };
  return (
    <PlanetContext.Provider
      value={{
        planets,
        activePlanet,
        activeButton,
        isClicked,
        setPlanetHandler,
        onClickMenu: menuClickHandler,
        closeMenu,
      }}
    >
      {props.children}
    </PlanetContext.Provider>
  );
};

export default PlanetContextProvider;
