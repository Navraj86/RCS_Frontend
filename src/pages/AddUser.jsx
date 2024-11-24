import { Button, ButtonGroup, WrapItem } from "@chakra-ui/react";

const AddUser = () => {
  return (
    <div className="w-[600px] ms-10">
      <h1 className="text-2xl font-bold mb-2 text-center mt-5">Add User</h1>
      <form action="">
        <div className="mb-3 flex flex-col gap-1">
          <label>Name</label>
          <input required type="text" className="h-10 border-2 border-gray-400 rounded-md px-2 focus:border-teal-600" placeholder="Enter Name" />
        </div>

        <div className="mb-3 flex flex-col gap-1">
          <label>Father's Name </label>
          <input
            required
            type="text"
            className="h-10 border-2 border-gray-400 rounded-md px-2"
            placeholder="Enter Father's Name"
          />
        </div>

        <div className="mb-3 flex flex-col gap-1">
          <label>Email</label>
          <input
            required
            type="email"
            className="h-10 border-2 border-gray-400 rounded-md px-2"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3 flex flex-col gap-1">
          <label>Aadhar Card</label>
          <input
            required
            type="number"
            className="h-10 border-2 border-gray-400 rounded-md px-2"
            placeholder="Enter Aadhar Card"
          />
        </div>
        <div className="mb-3 flex flex-col gap-1">
          <label>Contact</label>
          <input
            required
            type="number"
            className="h-10 border-2 border-gray-400 rounded-md px-2"
            placeholder="Enter Contact"
          />
        </div>
        <div className="mb-3 flex flex-col gap-1">
          <label>Residental Address</label>
          <input
            required
            type="text"
            className="h-10 border-2 border-gray-400 rounded-md px-2"
            placeholder="Enter Residental Address"
          />
        </div>

        <WrapItem className="mt-3 float-end">
          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
        </WrapItem>
      </form>
    </div>
  );
};

export default AddUser;
