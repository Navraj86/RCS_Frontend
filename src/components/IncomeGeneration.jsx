import React from 'react'
import cloudSvg from "../assets/cloud_upload_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";

const IncomeGeneration = () => {
  return (
    <div className="flex justify-around">
        <div className="w-[600px] mt-8 mb-10">
          <form action="">
            <div className="mb-3 flex flex-col gap-1">
              <label>Name</label>
              <input
                required
                type="text"
                className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
                placeholder="Enter Name"
              />
            </div>

            <div className="mb-3 flex flex-col gap-1">
              <label>Aadhar Card</label>
              <input
                required
                type="number"
                className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
                placeholder="Enter Father's Name"
              />
            </div>

            <div className="mb-3 flex flex-col gap-1">
              <label>GSTIN (If Applicable)</label>
              <input
                required
                type="number"
                className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label>Year of Lease</label>
              <input
                required
                type="date"
                className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
                placeholder="Enter Aadhar Card"
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label>Purpose of Lease</label>
              <input
                required
                type="text"
                className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
                placeholder="Enter Contact"
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label>
                Upload Lease Agreement <span>(Signed Lease Document)</span>
              </label>
              <input
                required
                type="file"
                className="h-10 py-1 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
                placeholder="Enter Residental Address"
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label>Date of Lease Agreement Signing</label>
              <input
                required
                type="date"
                className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
                placeholder="Enter Residental Address"
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label>Lease Valuation</label>
              <input
                required
                type="number"
                className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
                placeholder="Enter Residental Address"
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label>Payment Mode</label>
              <select
                className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
                name="paymentMode"
                id=""
              >
                <option value="full">Full Payment</option>
                <option value="installments">Installments</option>
              </select>
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label>Due Dates for Installments</label>
              <input
                required
                type="date"
                className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
                placeholder="Enter Residental Address"
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label>Interest Calculation</label>
              <input
                required
                type="text"
                className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
                placeholder="Enter Residental Address"
              />
            </div>
          </form>
        </div>

        <div className="w-[600px] mt-8 ">
          <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-5">
            <div className="text-center">
              <h1 className="text-lg font-bold">Upload Documents</h1>
            </div>

            <div className="mt-5">
              <h2 className="text-gray-700 font-medium text-center py-2 bg-gray-100 rounded-md">
                Lease Agreement
              </h2>
              <div className="border-dashed border-2 border-gray-300 rounded-md p-5 text-center mt-3">
                <div className="text-gray-500">
                  <div className="flex justify-center mb-3">
                    <img className="w-16" src={cloudSvg} alt="" />
                  </div>
                  <p>Select a file or drag and drop here</p>
                  <p className="text-sm text-gray-400 mt-2">
                    JPG, PNG, or PDF, file size no more than 10MB
                  </p>
                </div>
                <button className=" border border-teal-600 text-teal-600 mt-3 py-2 px-4 rounded-md text-sm">
                  Select File
                </button>
              </div>
            </div>

            <div className="mt-5">
              <h2 className="text-gray-700 font-medium text-center py-2 bg-gray-100 rounded-md">
                Payment Receipts
              </h2>
              <div className="border-dashed border-2 border-gray-300 rounded-md p-5 text-center mt-3">
                <div className="text-gray-500">
                  <div className="flex justify-center mb-3">
                    <img className="w-16" src={cloudSvg} alt="" />
                  </div>
                  <p>Select a file or drag and drop here</p>
                  <p className="text-sm text-gray-400 mt-2">
                    JPG, PNG, or PDF, file size no more than 10MB
                  </p>
                </div>
                <button className=" border border-teal-600 text-teal-600 mt-3 py-2 px-4 rounded-md text-sm">
                  Select File
                </button>
              </div>
            </div>

            <div className="mt-5">
            <button type='submit' className='rounded-md w-full h-10 text-white bg-teal-600 mt-2'>Submit</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default IncomeGeneration