import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useGetUser } from "../services/api";

function Protected({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="signin" />;
  }
  return children;
}

function LevelProtected({ children, routeLevel }) {
  const { user } = useAuth();
  const userData = useGetUser();
  const [view, setView] = useState(<>loading</>);

  useEffect(() => {
    if (!user) {
      setView(<Navigate to="/signin" />);
    } else {
      if (userData && userData.level >= routeLevel) {
        setView(children);
      } else {
        setView(<>You are not authorised to be here buddy</>);
      }
    }
  }, [userData]);

  return view;
}

export { Protected, LevelProtected };
