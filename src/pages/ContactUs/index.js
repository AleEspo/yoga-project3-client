import { ContactUsForm } from "../../components/ContactUsForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export function ContactUs() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/send-email/contact-us", form);

      //toast?

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <ContactUsForm handleSubmit={handleSubmit} handleChange={handleChange} />
    </>
  );
}
