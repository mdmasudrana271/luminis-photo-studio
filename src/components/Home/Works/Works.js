import React, { useEffect, useState } from "react";
import WorksCard from "./WorksCard";

const Works = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://travel-photographer-server.vercel.app/works")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  console.log(services);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center mt-5 space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-5">
          {services.map((item) => (
            <WorksCard key={item._id} item={item}></WorksCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Works;
