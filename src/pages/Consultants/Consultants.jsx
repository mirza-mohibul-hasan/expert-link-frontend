import { useEffect, useState } from "react";
import ConsultantsCard from "./ConsultantsCard";

const Consultants = () => {
  const [consultants, setConsultants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/consultants")
      .then((res) => res.json())
      .then((data) => setConsultants(data));
  }, []);
  return (
    <div className="w-10/12 mx-auto mt-10">
      <h1 className="text-5xl text-center font-bold mb-10">Our Consultants</h1>
      <div className="grid grid-cols-5">
        {consultants.map((consultant) => (
          <ConsultantsCard
            key={consultant._id}
            consultant={consultant}
          ></ConsultantsCard>
        ))}
      </div>
    </div>
  );
};

export default Consultants;
