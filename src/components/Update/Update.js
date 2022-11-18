import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData} from 'react-router-dom';
import useTitle from '../../hooks/useTitle';



const Update = () => {


    const storedReview = useLoaderData()
    const {email, feedback, name, service, _id, photoURL, time,serviceId} = storedReview;
    console.log(storedReview)

    useTitle('Update Review')



    const handleFormData = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const service = form.service.value;
        const feedback = form.feedback.value;
    
        const review = {
          name,
          email,
          service,
          feedback,
          photoURL,
          time,
          serviceId
        };


        fetch(`https://travel-photographer-server.vercel.app/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                toast.success('review updated successfully')
                console.log(data);
            }
            
        })
    
        
      };

    return (
        <div>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-base-100">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-bold text-3xl">Update Review</p>
          </div>
          <form
            onSubmit={handleFormData}
            className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
          >
            <div className="col-span-full sm:col-span-3">
              <label className="text-lg font-semibold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Service Title"
                className="w-full rounded-md input input-bordered"
                defaultValue={name}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-lg font-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder = "Your Email"
                defaultValue={email}
                className="w-full rounded-md input input-bordered"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-lg font-semibold">Service</label>
              <input
                type="text"
                name="service"
                placeholder="Service"
                className="w-full rounded-md input input-bordered"
                defaultValue={service}
                readOnly
              />
            </div>
            <div className="col-span-full">
              <label className="text-lg font-semibold">Feedback</label>
              <textarea
                placeholder="Your Feedback"
                name="feedback"
                defaultValue={feedback}
                className="w-full rounded-md input input-bordered"
              ></textarea>
            </div>
            <input
              type="submit"
              name=""
              id=""
              placeholder="Submit"
              className="btn"
            />
          </form>
        </fieldset>
        <Toaster />
      </div>
    );
};

export default Update;