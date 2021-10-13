import { Route, Redirect, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../service/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  return (
    <Route {...rest}>
      {isAuthenticated() ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}
    </Route>
  );
};

export default PrivateRoute;
