import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1 className="m-4">  Do you need to sign up ? </h1>
      <h4 className="m-4">To do this, you need some information including a username, Email, Password and...</h4>
      <h4 className="m-4">Please press the sign up button at the bottom</h4>
      <button className="btn btn-lg btn-success" onClick={() => { navigate("/register") }}>Sign up</button>
    </>
  )
};
 
export default SignUp;