import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appoinment from '../../../assets/images/appointment.png';

const MakeAppoinment = () => {
    return (
        <section className='mt-32 rounded-lg'
            style={{
                background: `url(${appoinment})`
            }}
        >
            <div className="hero text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-32 hidden lg:block md:block lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <p>APPOINMENT</p>
                        <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;