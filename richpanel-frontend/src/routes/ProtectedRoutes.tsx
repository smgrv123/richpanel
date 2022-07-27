import { Navigate, Outlet } from "react-router-dom";
import Login from "../screens/auth/Login";
import mobxStore from "../store/mobxStore";

function ProtectedRoutes() {
  let isAuth = mobxStore.userSuccesssfullyLoggedIn;

  return isAuth ? <Outlet /> : <Navigate to={'/login'} />;
}

export default ProtectedRoutes;
