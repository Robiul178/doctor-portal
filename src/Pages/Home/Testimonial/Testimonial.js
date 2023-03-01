import React from 'react';
import quoto from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            image: people1,
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Califonia',
        },
        {
            _id: 2,
            name: 'Winson Herry',
            image: people2,
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Califonia',
        },
        {
            _id: 3,
            name: 'Winson Herry',
            image: people3,
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Califonia',
        },
    ]



    return (
        <section>
            <div className='mt-12 flex justify-between'>
                <div>
                    <h1>TESTIMONIAL</h1>
                    <p className='text-3xl'>What Our Patients Says</p>
                </div>
                <figure>
                    <img className='w-24 lg:w-48 ' src={quoto} alt="" />
                </figure>
            </div>


            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;