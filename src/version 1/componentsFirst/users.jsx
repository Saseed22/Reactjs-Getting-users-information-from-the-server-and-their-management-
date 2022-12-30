import React, { Component } from 'react';
import axios from 'axios';
import LoadingUsers from './loading';

import { Link } from 'react-router-dom';

class Users extends Component {
  state = {
    users: [],
    isLoading: true
  };
  async componentDidMount() {
    const response = await axios.get("https://reqres.in/api/users");
    setTimeout(() => {
      this.setState({ users: response.data.data, isLoading: false })
    }, 50);
  };
    render() {
      return (
        <>
          <div className='text-center mt-2'>
            <button onClick={this.handleCreate} className='btn btn-lg btn-info'>Add user</button>
          </div>
                
          <div className="row">
            {
              this.state.isLoading ? (<LoadingUsers />) : (

                this.state.users.map((user) => {
                  return (
                    <div className="col-4 text-center p-3">
                      <Link to={`/users/${user.id}`}>
                        <img src={user.avatar} style={{ borderRadius: "50%", width: "100px" }} alt="" />
                        <h4>{user.first_name}{user.last_name}</h4>
                      </Link>
                      <h5>{user.email}</h5>
                      <div className="row">
                        <div className="col-6">
                          <button onClick={() => { this.handleUpdate(user) }}
                            className="btn btn-primary btn-sm">Update
                          </button>
                        </div>
                        <div className="col-6">
                          <button onClick={() => { this.handleDelete(user) }}
                            className="btn btn-danger btn-sm">Delete
                          </button>
                        </div>

                      </div>

                    </div>
                  )
                })

              )
            }
          </div>
        </>
      );
  };

  handleCreate = async () => {
    const newUser = {
      first_name: 'Saeed',
      last_name: 'Ahmadi',
      email: 'bosbos@gmail.com',
      avatar: "https://picsum.photos/200"
    }
    await axios.post('https://reqres.in/api/users', newUser);
    this.setState({ users: [...this.state.users, newUser] });

  };
  handleUpdate = async (user) => {
    user.first_name = `miss||mr `;
    await axios.put(`https://reqres.in/api/users/${user.id}`, user);
    const UpdatedUser = [...this.state.users];
    const index = UpdatedUser.indexOf(user);
    UpdatedUser[index] = { ...user };
    this.setState({ users: UpdatedUser });
  };
  handleDelete = async (user) => {
    await axios.delete(`https://reqres.in/api/users/${user.id}`);
    const newUsers = this.state.users.filter(u => u.id !== user.id);
    this.setState({ users: newUsers });
  };
};

export default Users;
