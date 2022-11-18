import React from "react";
import { FaClock, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyReviewsCard = ({item,handleDelete}) => {
    const {feedback, name, photoURL, service, _id, time} = item;
  return (
    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={photoURL}
              alt=""
              className="object-cover w-8 h-8 rounded-full dark:bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <div className="flex items-center gap-1">
              <span className=" dark:text-gray-400"><FaClock/></span>
              <span>{time.hour}:{time.minutes}</span>
              {time.hour > 12 ? <span>PM</span> : <span>AM</span>}
            </div>
          </div>
        <p className="text-sm">{service}</p>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm dark:text-gray-400">
        <p>{feedback}</p>
      </div>
      <div className="flex justify-between items-center">
        <Link to={`/update/${_id}`}>
          <button><FaEdit></FaEdit></button>
        </Link>
        <button onClick={()=>handleDelete(_id)}><FaTrash></FaTrash></button>
      </div>
    </div>
  );
};

export default MyReviewsCard;
