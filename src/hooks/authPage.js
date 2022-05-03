import {Navigate} from 'react-router-dom';
import jwt from 'jwt-decode';
import GetCookie from "./getCookie";

const authPage = (Component) => {
    const AuthRoute = () => {
      const isAuth = GetCookie('usr');
      if (isAuth && jwt(isAuth).user) {
        return <Component />;
      } else {
        return <Navigate replace to="/" />;
      }
    };
  
    return AuthRoute;
  };
  export default authPage;