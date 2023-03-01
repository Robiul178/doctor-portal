import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModa from '../BookingModa/BookingModa';
import AppoinmentOption from './AppoinmentOption';

const AvilableAppoinment = ({ selectedDate }) => {

    const [treatmrnt, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    console.log(date)
    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data;
        }

    })


    return (
        <div>
            <p className='text-center '>Avilable Appoinment on : {format(selectedDate, 'PP')}</p>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppoinmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppoinmentOption>)
                }
                {
                    treatmrnt &&
                    <BookingModa
                        clickedTreatment={treatmrnt}
                        selectedDate={selectedDate}
                        setTreatment={setTreatment}
                    ></BookingModa>
                }
            </div>
            <div>

            </div>
        </div >
    );
};

export default AvilableAppoinment;