import { useState } from "react";
import { api } from "../../api/api";

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
        const response = await api.post("/user/login", form)

        // preciso salvar o os datos + o token no localstorage do browser pra puder utiliza-lo
        // key que chamo "loggedInUser" e vou guardar 
        localStorage.setItem("loggedInUser", JSON.stringify(response.data))

        console.log(response.data)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Login</h1>
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
      </form>
    </>
  );
}
