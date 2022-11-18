import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvide';
import useTitle from '../../hooks/useTitle';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {

    useTitle('My Reviews')

    const {user, logOut} = useContext(AuthContext)
    const email = user.email;
    const [feedback, setFeedback] = useState([])

    useEffect(()=>{
        fetch(`https://travel-photographer-server.vercel.app/review?email=${email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('photography')}`
            }
        })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                return logOut();
            }
            return res.json();
        })
        .then(data => setFeedback(data))
    },[email, logOut])


    const handleDelete=(_id)=>{
        // const proceed = 
        const proceed =  toast.success('Review delete successfully')
    if(proceed){
        fetch(`https://travel-photographer-server.vercel.app/review/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('photography')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('orders cancel successfully')
                const remaining = feedback.filter(odr=> odr._id !== _id)
                setFeedback(remaining)
            }
        })
    }
    }


    
    return (
        <div>
            <h1 className='text-xl text-center font-bold '>My Reviews</h1>
            <div>
                { feedback.length > 0 ?
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 mx-10 my-10'>
                        {
                            feedback.map(item=> <MyReviewsCard key={item._id} item={item} handleDelete={handleDelete}></MyReviewsCard>)
                        }
                    </div>
                    : 
                    <p className='text-center text-3xl font-semibold my-10'>No reviews were added</p>
                }
            </div>
          <Toaster/>
        </div>
    );
};

export default MyReviews;