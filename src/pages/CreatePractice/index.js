import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import CreatePracticeForm from "../../components/CreatePracticeForm";

export function CreatePractice() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    meeting: "",
    type: "Group",
    price: 0,
    placesLeft: 0,
    time: "",
    tag: "Hatha",
    description: "",
    img: "",
  });
  console.log(form);

  const [img, setImg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleImg(e) {
    setImg(e.target.files[0]);
  }

  // useEffect(()=>{
  //   async function changeImgURL(){
  //     try {
  //       const imgURL = await handleUpload();

  //       setForm({...form, img: imgURL})

  //     } catch (err){
  //       console.log(err)
  //     }
  //   }
  //   changeImgURL()
  // }, [img])

  async function handleUpload() {
    try {
      const dataForUpload = new FormData();

      dataForUpload.append("picture", img);

      const response = await api.post("/upload-image", dataForUpload);

      return response.data.url;
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const imgURL = await handleUpload();

      await api.post("/practice", { ...form, img: imgURL });

      navigate("/practice");
    } catch (err) {
      console.log(err);
    }
  }

  // insert select no form
  return (
    <>
      <CreatePracticeForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleImg={handleImg}
        name={form.name}
        price={form.price}
        placesLeft={form.placesLeft}
        tag={form.tag}
        description={form.description}
        meeting={form.meeting}
      />
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="input-name">Name of the class</label>
        <input
          id="input-name"
          type="text"
          onChange={handleChange}
          value={form.name}
          name="name"
        />

        <label htmlFor="input-type">Type of the class</label>
        <select type="select" name="type" onChange={handleChange}>
          <option value="Group">Group</option>
          <option value="Personal">Personal</option>
        </select>
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

        <label htmlFor="input-picture">Foto: </label>
        <input type="file" onChange={handleImg} />

        <button>Create!</button>
      </form> */}
    </>
  );
}
