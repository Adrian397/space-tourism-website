import { useEffect, useState } from "react";
import React from "react";

export const TechnologyContext = React.createContext({
  technology: [],
  activeTechnology: undefined,
  activeButton: undefined,
  setTechnology: () => {},
  setSpaceTechnology: () => {},
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

  const setSpaceTechnology = (e) => {
    if (e.target.id === "0") {
      setActiveTechnology(technology[0]);
      setActiveButton("launch-vehicle");
    } else if (e.target.id === "1") {
      setActiveTechnology(technology[1]);
      setActiveButton("space-port");
    } else if (e.target.id === "2") {
      setActiveTechnology(technology[2]);
      setActiveButton("space-capsule");
    }
  };

  return (
    <TechnologyContext.Provider
      value={{
        technology,
        activeTechnology,
        activeButton,
        setTechnology,
        setSpaceTechnology,
      }}
    >
      {props.children}
    </TechnologyContext.Provider>
  );
};

export default TechnologyContextProvider;
