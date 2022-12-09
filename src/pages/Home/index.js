import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export function Home() {
  const navigate = useNavigate();

  const { loggedInUser, loading } = useContext(AuthContext);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : loggedInUser ? (
        <>
          <h1>Home</h1>

          <button
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </button>
        </>
      ) : (
        <>
          {" "}
          <h1>Home</h1>
          <button
            onClick={() => {
              navigate("/signup");
            }}
          >
            SignUp
          </button>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </>
      )}
    </>
  );
}
  // return 
  // (
  //   <>
  //     {loading ? (<h1>Loading</h1>) : loggedInUser.token ? (
  //         <>
  //           <h1>Home</h1>
  //           <button
  //             onClick={() => {
  //               navigate("/profile");
  //             }}
  //           >
  //             Profile
  //           </button>
  //         </>
  //       ) : (
  //         <>
  //           <h1>Home</h1>
  //           <button
  //             onClick={() => {
  //               navigate("/signup");
  //             }}
  //           >
  //             SignUp
  //           </button>
  //           <button
  //             onClick={() => {
  //               navigate("/login");
  //             }}
  //           >
  //             LogIn
  //           </button>
  //         </>
  //       )
  //     </>
  //     }
  //   </>
  // )
  //}
