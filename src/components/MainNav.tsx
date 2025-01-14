import React from "react";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import UserNameMenu from "./UserNameMenu";
import { NavLink } from "react-router";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex space-x-2 items-center">
      <div className="w-full flex items-center justify-center ">
        <div className="menu-links mt-2 hidden md:flex lg:flex justify-end gap-3 text-orange-500">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          {isAuthenticated &&(<NavLink to="/order-status">ORDER STATUS</NavLink>)}
          
        </div>
      </div>

      {isAuthenticated ? (
        <UserNameMenu />
      ) : (
        <Button
          onClick={async () => {
            await loginWithRedirect();
          }}
          variant="ghost"
          className="font-bold hover:text-orange-500 hover:bg-white"
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
