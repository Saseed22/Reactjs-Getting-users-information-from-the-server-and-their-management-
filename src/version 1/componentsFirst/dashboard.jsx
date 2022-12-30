import React, { Component } from 'react';
import { Outlet,NavLink } from 'react-router-dom';

class Dashboard extends Component {
    state = {  } 
    render() { 
      return (
        <>
          <h1>You have no access to this page, please select one of this tabs</h1>
          <NavLink to='/dashboard/signin' className='btn btn-sm btn-info mx-2'
            style={({ isActive }) => { return { color: isActive ? "red" : "black" } }}> login </NavLink>
          <NavLink to='/dashboard/signup' className='btn btn-sm btn-info mx-2'
            style={({ isActive }) => { return { color: isActive ? "red" : "black" } }}> SignUp </NavLink>
                
          <Outlet />
        </>
      )
    };
};
 
export default Dashboard;