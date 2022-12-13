import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { api } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { ProfileDashboard } from "../../components/ProfileDashboard";
import { NavBar } from "../../components/NavBar - no";

export function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const { setLoggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/user/profile");
        setUserData(response.data);
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

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/");
  }

  return (
    <>
      <NavBar />
      <h1>{userData.name}</h1>
      <Link to="/practice">
        <button>Practice</button>
      </Link>
      {userData.role === "TEACHER" ? (
        <Link to="/practice/create">
          <button>Create new practice</button>
        </Link>
      ) : null}
      <button onClick={handleLogOut}>Log Out</button>
    </>
  );
}
