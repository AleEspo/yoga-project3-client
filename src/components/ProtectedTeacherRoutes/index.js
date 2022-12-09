import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedTeacherRouter(props) {
  const { Component } = props;
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser")
  const parsedUser = JSON.parse(loggedInUser || ` "" `)

  useEffect(()=>{
    if (parsedUser.user.role !== "TEACHER") {
        navigate("/login")
    }
  }, [])

  return <Component />
}

// Posso criar renderização condicional com outras condicoes

// export function ProtectedRouter(props) {
//     const { Component } = props;
//     const navigate = useNavigate();
  
//     const loggedInUser = localStorage.getItem("loggedInUser")
//     const parsedUser = JSON.parse(loggedInUser || ` "" `)
  
//EXEMPLO 
//     useEffect(()=>{
//       if (parsedUser.user.role !== "TEACHER ") {
//           navigate("/login")
//       }
//     }, [])
  
//     return <Component />
//   }

  
//EXEMPLO 
//     useEffect(()=>{
//       if (parsedUser.user.role !== "ADMIN ") {
//           navigate("/login")
//       }
//     }, [])
  
//     return <Component />
//   }