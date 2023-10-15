import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";
const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const [myAcceptedAppointment, setMyAcceptedAppointment] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myAppointmentList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyAcceptedAppointment(data));
  }, [user]);
  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className="text-2xl">#</th>
              <th className="text-2xl">Name</th>
              <th className="text-2xl">Consultant Email</th>
              <th className="text-2xl">Profession</th>
              <th className="text-2xl">Rate</th>
              <th className="text-2xl">Status</th>
              <th className="text-2xl">Payment</th>
            </tr>
          </thead>
          <tbody>
            {myAcceptedAppointment.map((user, index) => (
              <tr key={user._id}>
                {/* {console.log(user)} */}
                <th>{index + 1}</th>
                <td>{user.consultantName}</td>
                <td>{user.consultantMail}</td>
                <td>{user.consultantProfession}</td>
                <td>{user.rate}</td>
                {user?.status ? (
                  <td>{user.status}</td>
                ) : (
                  <td>Waiting For Response</td>
                )}
                <td>
                  {user?.status == "Ok, You will have appointment with me." ? (
                    <Link to={`/dashboard/payment/${user._id}`}>
                      <button className="btn bg-green-500 btn-ghost btn-xs">
                        Pay
                      </button>
                    </Link>
                  ) : (
                    <button className="btn btn-ghost px-2 btn-xs" disabled>
                      Not available
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const [myAcceptedAppointment, setMyAcceptedAppointment] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myAppointmentList/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyAcceptedAppointment(data));
    }, [user])
    return (
        <div className="w-full">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th className="text-2xl">#</th>
                        <th className="text-2xl">Name</th>
                          <th className="text-2xl">Consultant Email</th>
                            <th className="text-2xl">Profession</th>
                            <th className="text-2xl">Status</th>
                            <th className="text-2xl">Payment</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            myAcceptedAppointment.map((user, index) => <tr key={user._id}>
                                {console.log(user)}
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.consultantEmail}</td>
                                <td>{user.profession}</td>
                                {user?.status ? <td>{user.status}</td> : <p>Waiting For Response</p>}
                                {user?.status == "Ok, You will have appointment with me." ? <button className="btn btn-primary p-5">Pay</button>: <button className="btn btn-ghost p-5" disabled>Not available</button>}
                                {/* <td>
                                    <button onClick={()=> handleDelete(user._id)} className="btn btn-ghost p-5">Delete</button>
                                </td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;
