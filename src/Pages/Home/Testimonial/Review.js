import React from 'react';

const Review = ({ review }) => {

    const { userReview, name, image, location } = review;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{userReview}</p>
                    <div className="card-actions ">
                        <img className='w-14 pt-2' src={image} alt="" />
                        <div>
                            <h1 className='text-lg'>{name}</h1>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;