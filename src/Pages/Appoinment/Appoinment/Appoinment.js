import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvilableAppoinment from '../AvilableAppoinment/AvilableAppoinment';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppoinmentBanner>
            <AvilableAppoinment
                selectedDate={selectedDate}
            ></AvilableAppoinment>
        </div>
    );
};

export default Appoinment;