import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { api } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { ProfilePage } from "../../components/ProfilePage";

export function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const { setLoggedInUser } = useContext(AuthContext);

  console.log(userData)

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
      <ProfilePage
        email={userData.email}
        country={userData.country}
        role={userData.role}
        students={userData.students}
        classes={userData.classes}
        coverPhoto={userData.coverPhoto}
        img={userData.img}
        name={userData.name}
        about={userData.about}
        description={userData.description}
        photo1={userData.otherPhotos[0]}
        photo2={userData.otherPhotos[1]}
        photo3={userData.otherPhotos[2]}
        photo4={userData.otherPhotos[3]}
      />
    </>
  );
}
