import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvide";
import useTitle from "../../hooks/useTitle";

const AddedReviews = () => {

  

  const { user, time } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, _id } = service;
  const { displayName, email, photoURL } = user;
  //   console.log(user)

  useTitle("Add Review");

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
      photoURL,
      service,
      feedback,
      time,
      serviceId: _id,
    };

    fetch("https://travel-photographer-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Thanks for your feedback");
          form.reset();
        }
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div>
      <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-base-100">
        <div className="space-y-2 col-span-full lg:col-span-1">
          <p className="font-bold text-3xl">Add Review</p>
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
              defaultValue={displayName}
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="text-lg font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
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
              defaultValue={title}
              readOnly
            />
          </div>
          <div className="col-span-full">
            <label className="text-lg font-semibold">Feedback</label>
            <textarea
              placeholder="Your Feedback"
              name="feedback"
              required
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

export default AddedReviews;
