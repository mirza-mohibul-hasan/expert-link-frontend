import Banner from "../../components/Banner";
import Consultants from "../Consultants/Consultants";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Consultants></Consultants>
    </div>
  );
};

export default Home;