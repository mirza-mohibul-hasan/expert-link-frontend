import { Outlet } from "react-router-dom"
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar"
import { ToastContainer } from "react-toastify";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <ToastContainer />
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main;