import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import axios from "axios";


const User = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(async () => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    setUser(response.data.data);
  }, [])
  return (
    <>
      <Outlet />
      <h1>Profile</h1>
      <img src={user.avatar} style={{ width: "200px" }} alt="" />
      <h2>{user.first_name}{user.last_name}</h2>
      <h2>{user.email}</h2>
      <h4>Phone number : ..............</h4>
      <h4>Address : ..............</h4>
      <img src={"https://picsum.photos/200"} style={{ width: "100px" }} className="m-2" alt="" />
      <img src={"https://picsum.photos/200"} style={{ width: "100px" }} className="m-2" alt="" />
      <img src={"https://picsum.photos/200"} style={{ width: "100px" }} className="m-2" alt="" />
      <img src={"https://picsum.photos/200"} style={{ width: "100px" }} className="m-2" alt="" />
      <img src={"https://picsum.photos/200"} style={{ width: "100px" }} className="m-2" alt="" />
            
            
      <h3>Biography</h3>
      <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque facere cum? Recusandae quis
        blanditiis nisi earum voluptatem, porro magnam nostrum quod commodi vitae! Consequatur nam inventore
        animi expedita! Ipsa, nobis facilis magnam quisquam, aliquam voluptatum deserunt doloremque ipsam
        adipisci perspiciatis a totam. Sed sequi ducimus nihil, placeat sint, ipsum eligendi porro veritatis
        et perferendis necessitatibus quidem reprehenderit assumenda consequuntur nostrum nesciunt minima?
        Quibusdam officia et voluptatum porro nostrum ratione quaerat accusantium magnam eveniet nihil? Vitae
        quasi, temporibus natus, dolore eveniet voluptatibus libero ea vel, cum sed provident aliquid laborum
        dolorum nam accusamus corporis magnam animi esse at tempora aspernatur et enim accusantium! In odio
        temporibus vel voluptatem totam! Esse soluta quas quidem ab impedit! Rerum itaque consequatur aperiam
        exercitationem tempore ut iusto. Quae optio delectus ducimus. Ea expedita, nihil veniam cumque omnis
        sit dicta rerum aperiam cum at. Deserunt obcaecati ex rerum sapiente placeat, distinctio ducimus
        possimus facilis ratione! Dolor temporibus sapiente, atque tenetur assumenda eaque laborum architecto
        cum voluptatibus quo quos molestiae qui nesciunt libero provident quod soluta odit. Excepturi quam
        optio ut magni asperiores nemo ab consequuntur quo magnam laudantium eius iusto facere aliquam dolorum,
        culpa perspiciatis ipsa iste quibusdam quia cum necessitatibus eaque. Neque, non pariatur.
      </h5>

      <button className="btn btn-lg btn-success" onClick={() => { navigate("/users") }}>Close</button>

            
            
            
    </>
  )
};
export default User;







