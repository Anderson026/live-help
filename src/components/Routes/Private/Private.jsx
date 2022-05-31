import { Route, Redirect } from "react-router-dom";
import {useContext} from "react";
import StoreContext from "../../../components/Store/Context";

const RoutesPrivate = ({ component: Component, ...rest }) => {

  const { token } = useContext(StoreContext);

  return (
    <Route
      {...rest}
      render={() => token ? 
        <Component { ...rest }/>
        : <Redirect to="/" />
      }
    />
  )
}

export default RoutesPrivate;