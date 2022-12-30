import axios from 'axios';
import React, { Component, } from 'react';
import Input from './input';
import * as yup from 'yup';
// import { useParams } from 'react-router-dom';



class Login extends Component {
  schema = yup.object().shape({
  email: yup.string().email('فرمت ایمیل صحیح نمیباشد').required('پر کردن فیلد ایمیل الزامی میباشد'),
  password: yup.string().min(4,'پسورد حداقل باید چهار کاراکتر باشد')
  });

  state = {
    account: {
      email: '',
      password: ''
    },
    errors: [],
    sending:false,
  }; 
  render() { 
    const { email, password } = this.state.account;
    return (
      <>
        {
          this.state.errors.length !== 0 && (
            <div className="alert alert-danger">
              <ul>
                {
                  this.state.errors.map((e,i) => <li key={i}>{e}</li>)
                }
              </ul>
            </div>
          )
        }
        <form onSubmit={this.handleSubmit}>          
          <Input name='email' value={email} lable='Email' onChange={this.handlechange} />
          <Input name='password' value={password} lable='Password' onChange={this.handlechange} />          
          <button disabled={this.state.sending} className="btn btn-lg btn-primary">LOGIN</button>
        </form>
      </>
    )
  };
  
  handlechange = async (e) => {
    const input = e.currentTarget;
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await this.validate();
    console.log(result);
    if (result) {
      try {
        this.setState({ sending: true });
        const response = await axios.post('https://reqres.in/api/login', result);
        this.setState({ sending: false });
        console.log(response);
      } catch (error) {
        this.setState({ sending: false });
        this.setState({ errors: ['نام کاربری یا پسورد صحیح نمی باشد'] });
      }
    }
  };
  
  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.account, { abortEarly: false });
      return result;
    } catch (error) {
      console.log(error.errors)
      this.setState({ errors: error.errors })
    }
  };

    
};
 
export default Login;