import { ModifyProfileForm } from "../../components/ModifyProfileForm";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../context/authContext";

export function ModifyProfile() {
  const navigate = useNavigate();

  const { loggedInUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    about: "",
    country: "",
    age: "",
    img: "",
    coverPhoto:
      "",
    otherPhotos: [],
  });;

  // deconstruir img?
  //   const { img } = form

  // DO I NEED LOGGED IN USER? CONTEXT???
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/user/profile");
        // delete password for security reasons
        delete response.data._id;

        setForm(response.data);
      } catch (err) {
        console.log(err);

        //se o token for expirado, vamos cancelalo
        if (err.response.status === 401) {
          localStorage.removeItem("loggedInUser");
          navigate("/");
        }
      }
    }

    fetchUser();
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

      // FILE, no picture? Assistir gravação
      dataForUpload.append("picture", img);

      const response = await api.post("/upload-image", dataForUpload);

      console.log(dataForUpload)
      console.log(response.data.url)
      return response.data.url;
    } catch (err) {
      console.log(err);
    }
  }

  // check logic on updating user info through _id
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const coverPhotoURL = await handleUploadCover();

      const imgURL = await handleUploadImg();

      await api.post("/user/update", {
        ...form,
        img: imgURL,
        coverPhoto: coverPhotoURL,
      });

      // [form.img: imgURL] ??

      // navigate("/profile"); OR toast
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
        country={form.country}
        age={form.age}
        img={form.img}
        coverPhoto={form.coverPhoto}
        otherPhotos={form.otherPhotos}
      />
    </>
  );
}
