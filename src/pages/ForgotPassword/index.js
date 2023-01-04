import { ForgotPasswordForm } from "../../components/FogotPasswordForm";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../api/api";

export function ForgotPassoword(){

    // const navigate = useNavigate();

    const [form, setForm] = useState({
      email: "",
    });

    console.log(form)
  
    function handleChange(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        console.log(form)
    
        try {
          const data = await api.post("/user/forgot-password", form);
    
          console.log(data)
          //toast?

        //   alert(data.status)
    
        // //   navigate("/login");
        } catch (err) {
          console.log(err);
        }
      }


    return (
        <>
            <ForgotPasswordForm handleSubmit={handleSubmit} handleChange={handleChange} />
        </>
    )
}