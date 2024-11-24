import React from 'react'

const DonationPurpose = () => {
  return (
    <div className="w-[600px] mt-8 ms-16">
          <form action="">
            <div className="mb-3 flex flex-col gap-1">
              <label>Organization/Person Name
              </label>
              <input
                required
                type="text"
                className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
                placeholder="Enter Organization/Person Name"
              />
            </div>

            <div className="mb-3 flex flex-col gap-1">
              <label>Year of Donation</label>
              <input
                required
                type="date"
                className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
              />
            </div>

            <div className="mb-3 flex flex-col gap-1">
              <label>Duration of Lease</label>
              <input
                required
                type="number"
                className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label>GST Number</label>
              <input
                required
                type="number"
                className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
                placeholder="Enter GST Number"
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label>Registration Act</label>
              <input
                required
                type="text"
                className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
                placeholder="Enter Registration Act"
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label>
              Signed donation agreement
              </label>
              <input
                required
                type="file"
                className="h-10 py-1 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
              />
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <label>
              MOU
              </label>
              <input
                required
                type="file"
                className="h-10 py-1 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 focus:shadow-md"
              />
            </div>

            <button type='submit' className='rounded-md w-full h-10 text-white bg-teal-600 mb-40 mt-2'>Submit</button>
            
          </form>
        </div>
  )
}

export default DonationPurpose