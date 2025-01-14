
import { Link, NavLink } from "react-router";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
   const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
   
          <NavLink  className="hover:text-orange-500" to="/">HOME</NavLink>
          <NavLink className="hover:text-orange-500"  to="/about">ABOUT</NavLink>
          <NavLink className="hover:text-orange-500"  to="/contact">CONTACT</NavLink>
          {isAuthenticated &&(<NavLink className="hover:text-orange-500"  to="/order-status">ORDER STATUS</NavLink>)}
          
       
     <Link to="/manage-restaurant" className="font-bold hover:text-orange-500">
        Manage Restaurant
      </Link>
      <Link
        to="/user-profile"
        className="bg-white flex items-center font-bold hover:text-orange-500"
      >
        User Profile
      </Link>

     

      <Button
        onClick={() => {
          logout();
        }}
        className="flex items-center px-3 font-bold hover:bg-slate-500"
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
