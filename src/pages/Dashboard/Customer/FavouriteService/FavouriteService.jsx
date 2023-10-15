import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../provider/AuthProvider";

const FavouriteService = () => {
  const { user } = useContext(AuthContext);
  const [favServices, setFavServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myFavServices/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setFavServices(data));
  }, [user]);
  const handleSendRequest = (service) => {
    const sendReqInfo = {
      consultantMail: service.consultantMail,
      appoinmentTime: document.getElementById(`localTime${service._id}`).value,
      message: document.getElementById(`message${service._id}`).value,
      rate: service.rate,
      paymentStatus: "unpaid",
      serviceName: service.serviceName,
      consultantName: service.consultantName,
      consultantProfession: service.consultantProfession,
      image: service.servicePhoto,
      customerEmail: user?.email,
      consultantContact: service.consultantContact,
    };
    console.log(sendReqInfo);
    fetch("http://localhost:5000/requestAppointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sendReqInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Send Request",
            showConfirmButton: false,
            timer: 700,
          });
        }
      });
  };
  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className="text-2xl">#</th>
              <th className="text-2xl">Service Name</th>
              <th className="text-2xl">Consultant Name</th>
              <th className="text-2xl">Consultant Email</th>
              <th className="text-2xl">Profession</th>
              <th className="text-2xl">Rate per hour</th>
              <th className="text-2xl">Message</th>
              <th className="text-2xl">Time</th>
              <th className="text-2xl">Send Request</th>
            </tr>
          </thead>
          <tbody>
            {favServices.map((service, index) => (
              <tr key={service._id}>
                <th>{index + 1}</th>
                <td>{service.serviceName}</td>
                <td>{service.consultantName}</td>
                <td>{service.consultantMail}</td>
                <td>{service.consultantProfession}</td>
                <td>{service.rate}</td>
                <td>
                  <input
                    type="text"
                    name="message"
                    id={`message${service._id}`}
                    className="input input-bordered"
                  />
                </td>
                <td>
                  <input
                    type="datetime-local"
                    name="localDateTime"
                    id={`localTime${service._id}`}
                  />
                </td>
                <td>
                  {
                    <button
                      onClick={() => handleSendRequest(service)}
                      className="btn btn-ghost p-5"
                    >
                      Request
                    </button>
                  }
                </td>
                {/* <td>
                                    <button onClick={()=> handleDelete(user._id)} className="btn btn-ghost p-5">Delete</button>
                                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavouriteService;
