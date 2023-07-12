import React, { useContext, useState } from "react";

const AppContext = React.createContext();

function AppProvider(prop) {
  const [info, setInfo] = useState();
  const values = {
    info,
    setInfo,
  };
  return (
    <AppContext.Provider value={values}>{prop.children}</AppContext.Provider>
  );
}
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
