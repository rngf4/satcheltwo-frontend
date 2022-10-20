import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";

function Protected({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="signin" />;
  }
  return children;
}

function LevelProtected({ children, routeLevel }) {
  const { user } = useAuth();
  const { userData } = useUser();
  const [view, setView] = useState(<>loading</>);

  useEffect(() => {
    if (!user) {
      setView(<Navigate to="/signin" />);
    } else {
      if (userData?.level) {
        if (userData.level >= routeLevel) {
          setView(children);
        } else {
          setView(<>You are not authorised to be here buddy</>);
        }
      }
    }
  }, [userData?.level]);

  return view;
}

export { Protected, LevelProtected };
