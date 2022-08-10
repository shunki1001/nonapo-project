import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  const signin = () => {
    setIsAuth(true);
    localStorage.setItem("isAuth", true);
  };
  const signout = () => {
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
  };

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      setIsAuth(localStorage.getItem("isAuth"));
    }
  }, []);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    } else if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth]);

  const value = { isAuth, signin, signout };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export default DataContextProvider;
