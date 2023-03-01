import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ContactUS from '../ContactUS/ContactUS';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Contact></Contact>
            <Service></Service>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <ContactUS></ContactUS>
        </div>
    );
};

export default Home;