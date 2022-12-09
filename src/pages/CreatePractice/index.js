import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export function CreatePractice() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    type:"",
    price: 0,
    placesLeft: 0,
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/practice", form);

      navigate("/practice");
    } catch (err) {
      console.log(err);
    }
  }

  // insert select no form
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-name">Name of the class</label>
        <input
          id="input-name"
          type="text"
          onChange={handleChange}
          value={form.name}
          name="name"
        />

        <label htmlFor="input-type">Type of the class</label>
        <input
          id="input-type"
          type="select"
          onChange={handleChange}
          value={form.type}
          name="type"
        />

        <label htmlFor="input-price">Price: </label>
        <input
          id="input-price"
          type="number"
          onChange={handleChange}
          value={form.price}
          name="price"
        />

        <label htmlFor="input-placesLeft">Places available: </label>
        <input
          id="input-placesLeft"
          type="number"
          onChange={handleChange}
          value={form.placesLeft}
          name="placesLeft"
        />

        <button>Create!</button>
      </form>
    </>
  );
}
