import React, { Component } from "react";
import Users from "./componentsFirst/users";
import User from "./componentsFirst/user";
import Qustion from "./componentsFirst/qustion";
import Navbar from "./componentsFirst/navbar";
import Login from "./componentsFirst/login";
import Home from "./componentsFirst/home"; 
import Dashboard from "./componentsFirst/dashboard";
import SignUp from "./componentsFirst/signUp";
import SignIn from "./componentsFirst/signIn";
import Register from "./componentsFirst/register";
import Notfound from "./componentsFirst/notfound";
import { Route,Routes,Navigate, } from "react-router-dom";


class App extends Component {
  
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-3">
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}   >
              <Route path="signUp"   element={<SignUp   />}  />
              <Route path="signIn"   element={<SignIn   />}  />
            </Route>
            <Route path="/users/:id" element={<User     />}   >
              <Route path=":id"      element={<Qustion  />}  />
            </Route>
            <Route path="/users"     element={<Users    />}  />
            <Route path="/notfound"  element={<Notfound />}  />           
            <Route path="/register"  element={<Register />}  />
            <Route path="/"          element={<Home     />}  />
            <Route path="/login"     element={<Login    />}  />
            <Route path="/home"      element={<Navigate replace to='/' />} />
            <Route path="*"          element={<Navigate replace to='/notfound'/>}/>
          </Routes>
        </div>
      </>
    );
  }
};

export default App;
