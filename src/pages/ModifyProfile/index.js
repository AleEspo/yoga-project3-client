import { ModifyProfileForm } from "../../components/ModifyProfileForm";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../context/authContext";

export function ModifyProfile() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    about: "",
    country: "",
    age: "",
    img: "",
    coverPhoto:
      "",
    photos: [],
  });
  console.log(form);

  // deconstruir img?
  //   const { img } = form

  // DO I NEED LOGGED IN USER? CONTEXT???
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await api.get("/user/profile");

        delete response.data._id;

        setForm(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchUserData();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const [coverPhoto, setCoverPhoto] = useState("");
  const [img, setImg] = useState("");

  function handleCoverPhoto(e) {
    setCoverPhoto(e.target.files[0]);
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

  async function handleUploadCover() {
    try {
      const dataForUpload = new FormData();

      dataForUpload.append("picture", coverPhoto);

      const response = await api.post("/upload-image", dataForUpload);

      console.log(response.data.url)
      return response.data.url;
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUploadImg() {
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
      const coverPhotoURL = await handleUploadCover();

      const imgURL = await handleUploadImg();

      await api.put("/user/settings", {
        ...form,
        [form.img]: imgURL,
        [form.coverPhoto]: coverPhotoURL,
      });

      console.log(form)

      // navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <ModifyProfileForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleCoverPhoto={handleCoverPhoto}
        handleImg={handleImg}
        name={form.name}
        email={form.email}
        about={form.about}
        county={form.country}
        age={form.age}
        img={form.img}
        coverPhoto={form.coverPhoto}
      />
    </>
  );
}
