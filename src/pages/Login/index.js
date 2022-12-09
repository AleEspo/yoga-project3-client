import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm";


export function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  //desestruturo o setLoggedInUser do AuthContext
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

  console.log(loggedInUser);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", form);

      // preciso salvar o os datos + o token no localstorage do browser pra puder utiliza-lo
      // key que chamo "loggedInUser" e vou guardar
      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      //mudo o meu Context na hora do login
      setLoggedInUser(response.data);

      navigate("/profile");

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} signupLink={"/signup"}/>
      {/* <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">E-mail:</label>
        <input
          id="input-email"
          type="email"
          onChange={handleChange}
          value={form.email}
          name="email"
        />
        <label htmlFor="input-password">Password:</label>
        <input
          id="input-password"
          type="password"
          onChange={handleChange}
          value={form.password}
          name="password"
        />
        <button>Log In</button>
      </form> */}
    </>
  );
}
