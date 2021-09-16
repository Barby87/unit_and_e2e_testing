import './App.css';
import { Login } from './container/Login/Login';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import UsersList from './container/usersList/UsersList';
import PrivateRoute from './components/functional-component/privateRoute/PrivateRoute';
import { useSelector } from 'react-redux';

function App() {

  const isLogin = useSelector(state => state.login.success)

  return (
    <div className="App container">
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink className="nav-item" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/users">Usuarios</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Login/>
          </Route>
          <PrivateRoute path="/users" exact isLogin={isLogin} component={UsersList}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
