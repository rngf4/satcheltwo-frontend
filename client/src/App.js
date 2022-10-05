import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import { Protected, LevelProtected } from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Teacher from "./pages/Teacher";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/signout"
            element={
              <Protected>
                <SignOut />
              </Protected>
            }
          />
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          <Route
            path="/teacher"
            element={
              <LevelProtected routeLevel={1}>
                <Teacher />
              </LevelProtected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
