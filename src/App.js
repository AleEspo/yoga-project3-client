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
import { MyOrders } from "./pages/MyOrders";
import { NavBar} from "./components/NavBar";


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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
