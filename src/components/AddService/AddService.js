import React from "react";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const AddService = () => {

  useTitle('Add Service')

  const handleFormData = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const img = form.photoURL.value;
    const price = form.price.value;
    const description = form.description.value;

    const service = {
      title,
      price,
      img,
      description,
    };

    fetch("https://travel-photographer-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('photography')}`
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully added service");
          form.reset();
        }
      });
  };

  return (
    <div>
      <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-base-100">
        <div className="space-y-2 col-span-full lg:col-span-1">
          <p className="font-bold text-3xl">Add Service</p>
        </div>
        <form
          onSubmit={handleFormData}
          className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
        >
          <div className="col-span-full sm:col-span-3">
            <label className="text-lg font-semibold">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Service Title"
              className="w-full rounded-md input input-bordered"
              required
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="text-lg font-semibold">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              placeholder="Photo Link"
              className="w-full rounded-md input input-bordered"
              required
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="text-lg font-semibold">Price</label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="w-full rounded-md input input-bordered"
              defaultValue="$"
              required
            />
          </div>
          <div className="col-span-full">
            <label className="text-lg font-semibold">Description</label>
            <textarea
              placeholder="Description"
              name="description"
              className="w-full rounded-md input input-bordered"
              required
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

export default AddService;
