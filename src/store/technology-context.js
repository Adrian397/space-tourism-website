import { useEffect, useState } from "react";
import React from "react";

export const TechnologyContext = React.createContext({
  technology: [],
  activeTechnology: undefined,
  activeButton: undefined,
  setTechnology: () => {},
  onChooseLaunchVehicle: () => {},
  onChooseSpaceport: () => {},
  onChooseSpaceCapsule: () => {},
});

const TechnologyContextProvider = (props) => {
  const [technology, setTechnology] = useState([]);
  const [activeTechnology, setActiveTechnology] = useState();
  const [activeButton, setActiveButton] = useState();

  useEffect(() => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedData = data.technology.map((technology) => {
          return {
            name: technology.name,
            img: technology.images.portrait,
            imgMobile: technology.images.landscape,
            desc: technology.description,
          };
        });
        setTechnology(transformedData);
      });
  });

  useEffect(() => {
    if (!activeTechnology && technology.length > 0) {
      setActiveTechnology(technology[0]);
      setActiveButton("launch-vehicle");
    }
  }, [activeTechnology, technology]);

  const setLaunchVehicle = () => {
    setActiveTechnology(technology[0]);
    setActiveButton("launch-vehicle");
  };

  const setSpaceport = () => {
    setActiveTechnology(technology[1]);
    setActiveButton("space-port");
  };

  const setSpaceCapsule = () => {
    setActiveTechnology(technology[2]);
    setActiveButton("space-capsule");
  };

  return (
    <TechnologyContext.Provider
      value={{
        technology: technology,
        activeTechnology: activeTechnology,
        activeButton: activeButton,
        setTechnology: setTechnology,
        onChooseLaunchVehicle: setLaunchVehicle,
        onChooseSpaceCapsule: setSpaceCapsule,
        onChooseSpaceport: setSpaceport,
      }}
    >
      {props.children}
    </TechnologyContext.Provider>
  );
};

export default TechnologyContextProvider;
