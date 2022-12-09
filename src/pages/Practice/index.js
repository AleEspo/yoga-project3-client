import { api } from "../../api/api";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

export function Practice() {
  const [practice, setPractice] = useState([]);

  const navigate = useNavigate();
  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchPractices() {
      try {
        const response = await api.get("/practice");
        setPractice(response.data);
      } catch (err) {
        console.log(err);
        // aqui pode colocar TOAST
      }
    }
    fetchPractices();
  }, []);

  async function handleDelete(practiceId){
    try{
      await api.delete(`/practice/${practiceId}`)
    } catch(err){
      console.log(err)
    }
  }

  // criar condicional {currentPractice.placesLeft !== 0} ? => book; : Join waiting list
  return (
    <>
      <h1>Practice</h1>
      {practice.map((currentPractice) => {
        return (
          <div key={currentPractice._id}>
            <h2>{currentPractice.name}</h2>
            <p>{currentPractice.price}</p>
            {loggedInUser ? (
              <button
                onClick={() => {
                  navigate("/buy");
                }}
              >
                Book
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            )}

            {
              loggedInUser.user.role==="TEACHER" && <button onClick={()=>{
                handleDelete(currentPractice._id)
              }}>Delete</button>
            }
          </div>
        );
      })}
    </>
  );
}
