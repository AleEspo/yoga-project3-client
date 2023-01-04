import { useState } from "react";
import { api } from "../../api/api.js";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "../../components/SignUpForm/index"

export function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "USER",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/user/signup", form);

      //toast?

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SignUpForm loginLink="/login" handleChange={handleChange} handleSubmit={handleSubmit}/>
    // <>
    //   <h1>Sign Up</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="input-name">Name:</label>
    //     <input
    //       id="input-name"
    //       name="name"
    //       type="text"
    //       value={form.name}
    //       onChange={handleChange}
    //     />
    //     <label htmlFor="input-email">E-mail:</label>
    //     <input
    //       id="input-email"
    //       name="email"
    //       type="email"
    //       value={form.email}
    //       onChange={handleChange}
    //     />
    //     <label htmlFor="formPassword">Password:</label>
    //     <input
    //       id="formPassword"
    //       name="password"
    //       type="password"
    //       //   pattern={
    //       //     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gm
    //       //   }
    //       value={form.password}
    //       onChange={handleChange}
    //     />
    //     <label htmlFor="formConfirmPassword">Confirm Password:</label>
    //     {/* <input
    //       id="formConfirmPassword"
    //       type="password"
    //       name="confirmPassword"
    //       value={form.confirmPassword}
    //       onChange={handleChange}
    //     /> */}
    //     <button type="submit">Sign Up</button>
    //   </form>
    // </>
  );
}
