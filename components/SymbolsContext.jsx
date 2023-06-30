import React, { createContext, useState, useEffect } from "react";

const SymbolsContext = createContext();

const SymbolsProvider = ({ children }) => {
  const [symbolsData, setSymbolsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!symbolsData) {
      fetch("./data.json")
        .then((response) => response.json())
        .then((data) => {
          setSymbolsData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [symbolsData]);

  return (
    <SymbolsContext.Provider value={{ symbolsData, isLoading }}>
      {children}
    </SymbolsContext.Provider>
  );
};

export { SymbolsContext, SymbolsProvider };
