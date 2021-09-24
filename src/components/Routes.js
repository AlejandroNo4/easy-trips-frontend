import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import CreateAccount from './CreateAccount';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/signUp" component={CreateAccount} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
