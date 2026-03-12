import { useNavigate } from "react-router-dom";

export default function Dashboard(){

  const navigate = useNavigate();

  return(

    <div>

      <h1>Welcome!</h1>
      <p>You are logged in.</p>

      <button onClick={()=>navigate("/")}>
        Logout
      </button>

    </div>

  );

}