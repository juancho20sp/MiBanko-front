import { React, useState, useEffect } from "react";
import MenuUsuario from "../../components/menuUsuario";
import { MenuAdmin } from "../../components/menuAdmin";
import GetCookie from "../../hooks/getCookie";
import jwt from 'jwt-decode';
import authPage from '../../hooks/authPage';
const Home = () => {
  
  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    let response = jwt(GetCookie('usr'));
    setCurrentUser(response.user);
  }, []);

  return (
    <div>
      {currentUser && currentUser.usr_role != "ADMIN" ? (
        <MenuUsuario userData={currentUser} />
      ) : (
        <MenuAdmin />
      )}
    </div>
  );
};
export default authPage(Home);
