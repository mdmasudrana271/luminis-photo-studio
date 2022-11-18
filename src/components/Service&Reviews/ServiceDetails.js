import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Reviews from "./Reviews";
import { AuthContext } from "../../context/AuthProvide";
import useTitle from "../../hooks/useTitle";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { title, description, _id, img, price } = service;
  const {user} = useContext(AuthContext)
  console.log(_id);

  useTitle('Service Details')
  return (
    <div>
      <section className="w-9/12 mx-auto ">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <PhotoProvider>
            <PhotoView src={img}>
              <img className="rounded" src={img} alt="" />
            </PhotoView>
          </PhotoProvider>
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {title}
            </h3>
            <p>{description}</p>
            <p className="text-lg font-bold">Price: {price}</p>
          </div>
        </div>
      </section>
      <div>
        <h1 className="text-5xl text-center font-bold">Client Reviews</h1>
        <Reviews id={_id}></Reviews>
        <div className="flex items-center justify-center my-10">
           {
              user ?  <Link className="p-3 rounded outline outline-primary" to={`/addreview/${_id}`}>Add Your Review</Link>
              : 
              <p className="text-lg">Please login to add a review <Link className="text-sky-400" to='/login'>Login</Link></p>
           }
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
