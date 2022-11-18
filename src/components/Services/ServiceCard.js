import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ item }) => {
  const { title, img, description, _id, price } = item;

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <PhotoProvider>
            <PhotoView src={img}>
            <img src={img} alt="Shoes" className="rounded-xl" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>
            {description.length > 100
              ? description.slice(0, 100) + "....."
              : description}
          </p>
          <p className="font-bold">Price: {price}</p>
          <div className="card-actions">
          <Link to={`/ServiceDetails/${_id}`}><button className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
