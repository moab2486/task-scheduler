import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Login from './views/login'
import SignUp from './views/signUp'
import ForgotPassword from './views/forgotPassword'
import Admin from './views/admin'
import Users from './views/users'

function App(){
  

  return(
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign up</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  // const sayLove = () => {
  //   alert("hello love")
  // }

  // return(
  //   <div>
  //     <h1>hello world</h1>
  //     <button onClick={sayLove}>Hello</button>
  //   </div>
  // );

  
}

export default App;