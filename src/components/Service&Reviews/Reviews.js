import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = ({id}) => {
    const [review, setReview] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch(`https://travel-photographer-server.vercel.app/review/${id}`)
        .then(res=> res.json())
        .then(data=> {
            setReview(data)
            setLoading(false)
        })
    },[id])
   

    console.log(review)

    return (
        <div>
            {
                loading ? 
                    <div className="flex items-center justify-center mt-5 space-x-2">
                        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                    </div>
                    :
                    <div className='my-20'>
                        {
                            review.length > 0 ?

                            <div className='grid md:grid-cols-2 lg:grid-cols-3 m-10 gap-3'>
                                {
                                    review.map(item => <ReviewCard key={item._id} item={item}></ReviewCard>) 
                                }
                            </div>
                    : 
                            <p className='text-center text-3xl font-semibold'>No reviews were added</p>
                        }
                    </div>
            }
        </div>
    );
};

export default Reviews;