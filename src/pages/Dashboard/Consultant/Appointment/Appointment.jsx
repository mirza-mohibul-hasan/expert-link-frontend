
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../provider/AuthProvider';

const Appointment = () => {
    const { user } = useContext(AuthContext);
    const [appointments, setAppointments] = useState([]);
      
    useEffect(() => {
        fetch(`http://localhost:5000/myAppointment/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAppointments(data);
      });
      }, [user])
      console.log(appointments)
    
    const handleAcceptRequest = (user) => {
        fetch(`http://localhost:5000/makeRequestAccept/${user._id}`, {
          method:'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Confirm your appointment!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    const handleDeleteRequest = (user) => {
        fetch(`http://localhost:5000/makeRequestDelete/${user._id}`, {
          method:'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Reject your appointment!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }


    return (
        <div className="w-full">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th className="text-2xl">#</th>
                        <th className="text-2xl">Client Name</th>
                          <th className="text-2xl">Client Email</th>
                            <th className="text-2xl">Message</th>
                            <th className="text-2xl">Time</th>
                            <th className="text-2xl">Rate</th>
                            <th className="text-2xl">Accept</th>
                            <th className="text-2xl">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment,index) => <tr key={appointment._id}>
                                <th>{index+1}</th>
                                <td>{appointment.customerName}</td>
                                <td>{appointment.customerEmail}</td>
                                <td>{appointment.message}</td>
                                <td>{appointment.appoinmentTime}</td>
                                <td>{appointment.rate}</td>
                                <td>
                                    {
                                  <button onClick={() => handleAcceptRequest(appointment)} className="btn btn-ghost p-5" disabled={appointment?.status}>Accept</button>
                                    }
                                </td>
                                <td>
                                    <button onClick={()=> handleDeleteRequest(appointment)} className="btn btn-ghost p-5" disabled={appointment?.status}>Cancel</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Appointment;