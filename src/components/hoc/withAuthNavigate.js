import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// const mapStateToPropsForNavigate = (state) => ({
//   isAuth: state.auth.isAuth
// })

export const withAuthNavigate = (Component) => {
  const NavigateComponent = (props) => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    if (!isAuth) return <Navigate to="/login" />;
    return <Component {...props} />;
  };

  // const ConnectedAuthNavigateComponent = connect(mapStateToPropsForNavigate)(NavigateComponent)

  return NavigateComponent;
  // return ConnectedAuthNavigateComponent
};
