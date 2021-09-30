import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import CreateAccount from './CreateAccount';
import Login from './Login';
import CreateTrip from './CreateTrip';
import UpdateAccount from './UpdateAccount';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/sign-up" component={CreateAccount} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/add-trip" component={CreateTrip} />
      <Route exact path="/update-account" component={UpdateAccount} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
