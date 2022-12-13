import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { api } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { NavBar } from "../../components/NavBar";

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
    </>
  );
}
