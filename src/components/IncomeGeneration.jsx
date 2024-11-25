import React from "react";
import cloudSvg from "../assets/cloud_upload_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import "../index.css"

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
              className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 "
              placeholder="Enter Name"
            />
          </div>

          <div className="mb-3 flex flex-col gap-1">
            <label>Aadhar Card</label>
            <input
              required
              type="number"
              className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 "
              placeholder="Enter Father's Name"
            />
          </div>

          <div className="mb-3 flex flex-col gap-1">
            <label>GSTIN (If Applicable)</label>
            <input
              required
              type="number"
              className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 "
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-3 flex flex-col gap-1">
            <label>Year of Lease</label>
            <input
              required
              type="date"
              className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 "
              placeholder="Enter Aadhar Card"
            />
          </div>
          <div className="mb-3 flex flex-col gap-1">
            <label>Purpose of Lease</label>
            <input
              required
              type="text"
              className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 "
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
              
              placeholder="Enter Residental Address"
            />
          </div>
          <div className="mb-3 flex flex-col gap-1">
            <label>Date of Lease Agreement Signing</label>
            <input
              required
              type="date"
              className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 "
              placeholder="Enter Residental Address"
            />
          </div>
          <div className="mb-3 flex flex-col gap-1">
            <label>Lease Valuation</label>
            <input
              required
              type="number"
              className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 "
              placeholder="Enter Residental Address"
            />
          </div>
          <div className="mb-3 flex flex-col gap-1">
            <label>Payment Mode</label>
            <select
              className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 "
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
              className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 "
              placeholder="Enter Residental Address"
            />
          </div>
          <div className="mb-3 flex flex-col gap-1">
            <label>Interest Calculation</label>
            <input
              required
              type="text"
              className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 "
              placeholder="Enter Residental Address"
            />
          </div>
        </form>
      </div>

      <div className="w-[600px] mt-12">
        <div className="bg-white w-[600px] rounded-lg p-5 border border-gray-200 shadow-md">
          <div className="text-center">
            <h1 className="text-xl font-bold text-[#017e7e]">Upload Documents</h1>
          </div>

          <div className="mt-5">
            <h2 className="text-gray-700 font-medium text-center py-2 bg-gray-100 rounded-md">
              Lease Agreement
            </h2>
            {/*--------- Drag & Drop --------*/}
            <div class="flex items-center justify-center w-full mt-1">
              <label
                for="dropzone-file"
                class=" flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  hover:bg-gray-50 dark:border-gray-400 dark:hover:border-gray-500 "
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX 10MB)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-gray-700 font-medium text-center py-2 bg-gray-100 rounded-md">
              Payment Receipts
            </h2>

            {/*--------- Drag & Drop --------*/}
            <div class="flex items-center justify-center w-full mt-1">
              <label
                for="dropzone-file"
                class=" flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 dark:border-gray-400 dark:hover:border-gray-500 "
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX 10MB)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>

        </div>
          <div className="mt-5">
            <button
              type="submit"
              className="rounded-md w-full h-10 text-white bg-[#017e7e] hover:bg-[#007171] active:bg-[#006464] mt-2"
            >
              Submit
            </button>
          </div>
      </div>
    </div>
  );
};

export default IncomeGeneration;
