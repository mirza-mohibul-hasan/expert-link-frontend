import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";

const PreviouslyTaken = () => {
  const { user } = useContext(AuthContext);
  const [myPreviousAppointment, setMyPreviousAppointment] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myTakenAppointmentList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyPreviousAppointment(data));
  }, [user]);
  console.log(myPreviousAppointment);
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
              <th className="text-2xl">Rate</th>
              <th className="text-2xl">Status</th>
              <th className="text-2xl">Contact</th>
              <th className="text-2xl">Review</th>
            </tr>
          </thead>
          <tbody>
            {myPreviousAppointment.map((user, index) => (
              <tr key={user._id}>
                {/* {console.log(user)} */}
                <th>{index + 1}</th>
                <td>{user.serviceName}</td>
                <td>{user.consultantName}</td>
                <td>{user.consultantMail}</td>
                <td>{user.consultantProfession}</td>
                <td>{user.rate}</td>
                <td>{user.paymentStatus}</td>
                <td>
                  {user.consultantContact}
                </td>
                <td>
                  <Link to={`dashboard/writereview`}>
                    <button className="btn bg-green-500 btn-ghost btn-xs">
                      Review
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviouslyTaken;
