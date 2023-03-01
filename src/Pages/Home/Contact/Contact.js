import React from 'react';

import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';


const Contact = () => {

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
            <div className="px-8 card card-side bg-gradient-to-r from-primary to-secondary shadow-xl">
                <figure><img src={clock} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">BOOK APPOINTMENT!</h2>
                    <p>Ask for an appointment of the doctor quickly with almost a single click. We take care of the rest.</p>
                </div>
            </div>
            <div className="card card-side bg-accent shadow-xl text-white">
                <figure><img src={marker} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">SEARCH DOCTOR</h2>
                    <p>Find your doctor easily with a minimum of effort. We've kept everything organised for you.</p>
                </div>
            </div>
            <div className="card card-side bg-gradient-to-r from-primary to-secondary shadow-xl">
                <figure><img src={phone} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Contact with US!</h2>
                    <p>Mail: <span></span></p>
                </div>
            </div>
        </div >
    );
};

export default Contact;