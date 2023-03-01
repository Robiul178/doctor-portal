import React from 'react';
import appoinment from '../../../assets/images/appointment.png'

const ContactUS = () => {
    return (

        <section className='text-center mt-20 rounded-lg py-8 text-white'
            style={{
                background: `url(${appoinment})`
            }}
        >
            <h1 className='font-semibold'>CONTACT US</h1>
            <p className='text-4xl'>Stay Connected with Us</p><br />
            <form>
                <input type="text" placeholder="Your Name" className="input input-bordered input-secondary w-2/5" /><br /><br />
                <input type="text" placeholder="Email Address" className="input input-bordered w-2/5 input-secondary" /> <br /><br />
                <textarea className="textarea textarea-error w-2/5" placeholder="Message"></textarea><br /><br />
                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Submit</button>
            </form>
        </section>



    );
};

export default ContactUS;