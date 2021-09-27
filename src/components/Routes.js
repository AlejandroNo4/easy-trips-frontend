import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import CreateAccount from './CreateAccount';
import Login from './Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/signUp" component={CreateAccount} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
