import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingModa from '../Appoinment/BookingModa/BookingModa';

const ManageDoctor = () => {

    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const closeModal = () => {
        setDeletingDoctor(null);
    }

    const { data: doctors, } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctorportal-ten.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (e) {

            }
        }
    })


    return (
        <div>
            <h2 className='text-lg font-bold'>Total Doctor:
                {doctors?.length}
            </h2>
            <br />


            {/* <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Specality</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors?.map((doctor, i) => <tr key={doctor._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 mask mask-hexagon">
                                                <img src={doctor.image} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <th> {doctor.name} </th>
                                    <th>{doctor.email}</th>
                                    <th>{doctor.specialty}</th>
                                    <th>
                                        <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirm-modal" className="btn btn-outline btn-error">DELETE</label>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                {
                    deletingDoctor && <ConfirmationModal
                        title={`Are you sure you waant to delete?`}
                        message={`If you delete ${deletingDoctor.name}. It can not be undone`}
                        closeModal={closeModal}
                    ></ConfirmationModal>
                }
            </div> */}


            <div>
                <h2 className='text'>Here Our All Doctor</h2>

                <div className="p-6">
                    <input type="text" placeholder="Search here..." className="input input-bordered input-primary w-full max-w-xs p-8" />
                </div>

                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        doctors?.map((doctor, i) => <div className='card card-side bg-base-100 shadow-xl' key={doctor._id}>
                            <div className="avatar">
                                <div className="w-24 mask mask-squircle">
                                    <img src={doctor.image} alt='' />
                                </div>
                            </div>


                            <div class="card-body">
                                <h1 class="card-title text-lg">
                                    <span className='text-base-300'>Name:</span> {doctor.name}
                                </h1>
                                <h2 className="italic font-bold">
                                    <span className='text-base-300'>Specialty:</span> {doctor.specialty}
                                </h2>
                                <p> {doctor.discription}</p>


                                {/* Booking option open testing */}

                                <Link to="/doctorappoinment">OKkk</Link>
                            </div>
                        </div>)
                    }
                    {/* {
                        doctors.map(d => <BookingModa>

                        </BookingModa>)
                    } */}
                </div>



            </div>


        </div >
    );
};

export default ManageDoctor;