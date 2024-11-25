import {
  Heading,
} from "@chakra-ui/react";

const AddUser = () => {
  return (
    <div className="w-[600px] ms-20">
      <Heading
        className="mt-5"
        as="h1"
        size="lg"
        textAlign="center"
        mb={6}
        color="teal.600"
      >
        Add User
      </Heading>
      <form action="">
        <div className="mb-3 flex flex-col gap-1">
          <label>Name</label>
          <input required type="text" className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 " placeholder="Enter Name" />
        </div>

        <div className="mb-3 flex flex-col gap-1">
          <label>Father's Name </label>
          <input
            required
            type="text"
            className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 "
            placeholder="Enter Father's Name"
          />
        </div>

        <div className="mb-3 flex flex-col gap-1">
          <label>Email</label>
          <input
            required
            type="email"
            className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 "
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3 flex flex-col gap-1">
          <label>Aadhar Card</label>
          <input
            required
            type="number"
            className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 "
            placeholder="Enter Aadhar Card"
          />
        </div>
        <div className="mb-3 flex flex-col gap-1">
          <label>Contact</label>
          <input
            required
            type="number"
            className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 "
            placeholder="Enter Contact"
          />
        </div>
        <div className="mb-3 flex flex-col gap-1">
          <label>Residental Address</label>
          <input
            required
            type="text"
            className="h-10 border-2 border-gray-400 rounded-md px-2 focus:outline-none focus:border-teal-600 "
            placeholder="Enter Residental Address"
          />
        </div>

        <button type='submit' className='rounded-md w-full h-10 text-white bg-[#017e7e] hover:bg-[#007171] active:bg-[#006464] mt-2'>Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
