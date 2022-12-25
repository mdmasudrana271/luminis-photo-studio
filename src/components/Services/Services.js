import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvide";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const { services, setServices } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useTitle('Services')

  useEffect(() => {
    fetch("https://travel-photographer-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, [setServices]);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center mt-5 space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-5 my-10 mx-10">
          {services.map((item) => (
            <ServiceCard key={item._id} item={item}></ServiceCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
