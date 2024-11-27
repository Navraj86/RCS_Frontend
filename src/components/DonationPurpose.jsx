import React from "react";
import "../index.css";

const DonationPurpose = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[700px] mt-8 mb-10 bg-white rounded-lg p-5 border border-gray-200 shadow-md">
        <form action="">
          <div className="mb-3 flex flex-col gap-1">
            <label>Organization/Person Name</label>
            <input
              required
              type="text"
              className="h-10 border-2 border-gray-300 rounded-md px-2 focus:outline-none focus:border-teal-600 "
              placeholder="Enter Organization/Person Name"
            />
          </div>

          <div className="mb-3 flex flex-col gap-1">
            <label>Year of Donation</label>
            <input
              required
              type="date"
              className="h-10 border-2 border-gray-300 rounded-md px-2 focus:outline-none focus:border-teal-600 "
            />
          </div>

          <div className="mb-3 flex flex-col gap-1">
            <label>Duration of Lease</label>
            <input
              required
              type="number"
              className="h-10 border-2 border-gray-300 rounded-md px-2 focus:outline-none focus:border-teal-600 "
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-3 flex flex-col gap-1">
            <label>GST Number</label>
            <input
              required
              type="number"
              className="h-10 border-2 border-gray-300 rounded-md px-2 focus:outline-none focus:border-teal-600 "
              placeholder="Enter GST Number"
            />
          </div>
          <div className="mb-3 flex flex-col gap-1">
            <label>Registration Act</label>
            <input
              required
              type="text"
              className="h-10 border-2 border-gray-300 rounded-md px-2 focus:outline-none focus:border-teal-600 "
              placeholder="Enter Registration Act"
            />
          </div>
          <div className="mb-3 flex flex-col gap-1">
            <label>Signed donation agreement</label>
            <input required type="file" />
          </div>
          <div className="mb-3 flex flex-col gap-1">
            <label>MOU</label>
            <input required type="file" />
          </div>

          <button
            type="submit"
            className="rounded-md w-full h-10 text-white bg-teal-600 mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationPurpose;
