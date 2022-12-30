import { useParams, useNavigate } from "react-router-dom";


const Qustion = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1 className="m-5"> Do you need informtion about {id} ?</h1>
      <button className="btn btn-lg btn-success m-3 px-5" onClick={() => { navigate("/notfound") }}>Yes</button>
      <button className="btn btn-lg btn-success m-3 px-5" onClick={() => { navigate("/users") }}>No</button>
            

    </>
  )
}; 
 
export default Qustion;