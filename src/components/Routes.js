import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import CreateAccount from './CreateAccount';
import Login from './Login';
import CreateTrip from './CreateTrip';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/signUp" component={CreateAccount} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/add-trip" component={CreateTrip} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
