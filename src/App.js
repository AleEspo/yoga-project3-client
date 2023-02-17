import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/Signup";
import { Login } from "./pages/Login";
import { AuthContextComponent } from "./context/authContext";
import { Profile } from "./pages/Profile/index";
import { Practice } from "./pages/Practice";
import { ProtectedUserRouter } from "./components/Routes/ProtectedUserRoutes";
import { PageNotFound } from "./pages/NotFound";
import { CreatePractice } from "./pages/CreatePractice";
import { ProtectedTeacherRouter } from "./components/Routes/ProtectedTeacherRoutes";
import "./styles/global.css"
import { MyOrders } from "./pages/MyClasses";
import { NavBar} from "./components/NavBar";
import { OurTeachers } from "./pages/OurTeachers";
import { YourStudents } from "./pages/YourStudents";
import { ModifyProfile } from "./pages/ModifyProfile";
// import { ProfilePage } from "./components/ProfilePage";
import { ContactUs } from "./pages/ContactUs";
import { ForgotPassoword } from "./pages/ForgotPassword";
import { EmailVerification } from "./pages/EmailVerification";


function App() {
  return (
    <>
      <AuthContextComponent>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/practice/create" element={<ProtectedTeacherRouter Component={CreatePractice} />} />
          <Route path="/profile" element={<ProtectedUserRouter Component={Profile} />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/order/my-orders" element={<ProtectedUserRouter Component={MyOrders} />} />
          <Route path="/our-teachers" element={<OurTeachers/>}/>
          <Route path="/your-students" element={<YourStudents/>}/>
          <Route path="/profile/settings" element={<ModifyProfile/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/forgot-password" element={<ForgotPassoword/>}/>
          <Route path="/email-verification" element={<EmailVerification/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
