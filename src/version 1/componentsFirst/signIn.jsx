import { useNavigate } from "react-router-dom";


const SignIn = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1 className="m-4">  Do you need to log in ?</h1>
      <h4 className="m-4">To do this, you need your username and password</h4>
      <h4 className="m-4">Please press the login button at the bottom</h4>
      <button className="btn btn-lg btn-success" onClick={() => { navigate("/login") }}>Login</button>
    </>
  )
};
 
export default SignIn;