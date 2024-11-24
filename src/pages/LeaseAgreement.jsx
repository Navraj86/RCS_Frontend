import { NavLink } from "react-router-dom";
import { useState } from "react";
import IncomeGeneration from "../components/IncomeGeneration";
import DonationPurpose from "../components/DonationPurpose";

const LeaseAgreement = () => {
  const [activeComp, setActiveComp] = useState("A");

  const Income = () => {
    setActiveComp("A");
  };

  const Donation = () => {
    setActiveComp("B");
  };

  return (
    <>
    
      <h1 className="text-3xl font-bold mb-2 text-center items-center mt-5 text-[#017e7e]">
        Lease Agreement
      </h1>

      <div className="flex justify-center ms-20 mt-5">
        <button onClick={() => Income()} className={`rounded-md px-4 py-2 me-5 ${activeComp === 'A'? "bg-[#017E7E] text-white" : "bg-[#e5f2f2] text-[#017e7e] border border-[#017e7e]" }`}>Income Generation</button>
        <button onClick={() => Donation()} className={`rounded-md px-4 py-2 me-16 ${activeComp === 'B'? "bg-[#017E7E] text-white" : "bg-[#e5f2f2] text-[#017e7e] border border-[#017e7e]" }`}>Donation Purposes</button>
      </div>
    <div className="ms-10">
      {activeComp === "A" && <IncomeGeneration />}
      {activeComp === "B" && <DonationPurpose />}
    </div>
    </>
  );
};

export default LeaseAgreement;
