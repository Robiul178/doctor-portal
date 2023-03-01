import React from 'react';

const AppoinmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option;
    // console.log(option, 'click korar por')
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="card-title font-bold" >{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try another day!'}</p>
                    <p>{slots.length}{slots.length > 1 ? 'spaces' : 'spaces'}</p>
                    <div className="card-actions justify-end">
                        <label
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(option)}
                            htmlFor="bookingModa"
                            className="btn"
                        >Book Appoinment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentOption;