import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { api } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";

export function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchUser() {
      try {
        if (loggedInUser) {
          const response = await api.get("/user/profile");
          setUserData(response.data);
        }
      } catch (err) {
        console.log(err);

        //se o token for expirado, vamos cancelalo
        if (err.response.status === 401) {
          localStorage.removeItem("loggedInUser");
          navigate("/");
        }
      }
    }

    fetchUser();
  }, []);

  return (
    <>
      <h1>{userData.name}</h1>
      <Link to="/practice">
        <button>Practice</button>
      </Link>
      {userData.role === "TEACHER" ? (
        <Link to="/practice/create">
          <button>Create new practice</button>
        </Link>
      ) : null}
    </>
  );
}
