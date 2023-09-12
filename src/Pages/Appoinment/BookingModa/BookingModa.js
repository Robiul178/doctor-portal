import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModa = ({ clickedTreatment, setTreatment, selectedDate }) => {
    const { name: treatmentName, slots } = clickedTreatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;
        const booking = {
            appoinmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
        }


        fetch('https://doctorportal-ten.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirme')
                }
            })
    }




    return (
        <>
            <input type="checkbox" id="bookingModa" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModa" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className='font-bold'>{treatmentName}</h2>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full" />
                        <input name="phone" type="phone" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModa;