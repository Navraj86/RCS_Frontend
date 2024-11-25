import React, { useState  } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel, Button, FormErrorMessage } from "@chakra-ui/react";

const Form = () => {
  const [formData, setFormData] = useState({
    landType: "",
    area: "",
    currentValuation: "",
    collectorRate: "",
    saleDeedFile: null,
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const requiredFields = ["landType", "area", "currentValuation", "collectorRate", "saleDeedFile"];
  
  const onFormChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (requiredFields.includes(id)) {
      if (value.trim() === "") {
        setErrors((prev) => ({
          ...prev,
          [id]: "This field is required",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          [id]: "",
        }));
      }
    }
  };

  const handleFileUpload = (e) => {
    const { id, files } = e.target;

    if (files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        [id]: files[0],
      }));
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [id]: "Please upload a file",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (
        (key === "saleDeedFile" && !formData[key]) || 
        (requiredFields.includes(key) && !formData[key]?.toString().trim()) 
      ) {
        newErrors[key] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
      alert("New Property Added Successfully!");
      console.log("Form submitted successfully", formData);
      setFormData({
        landType: "",
        area: "",
        currentValuation: "",
        collectorRate: "",
        identificationMark: "",
        giTag:"",
        saleDeedFile: null,
      });
      setErrors({});
      navigate("/properties");
    };

const renderField = (label, id, placeholder, type = "text", isRequired = false) => (
  <div className="mb-3 ">
    <label>{label}{isRequired && <span className="text-red-500">*</span>}</label>
    <input
      type={type}
      id={id}
      value={formData[id]}
      onChange={onFormChange}
      className="h-10 border-2 mt-2 border-gray-300 w-full rounded-md px-2 focus:outline-none focus:border-teal-600"
      required={isRequired}
      placeholder={placeholder}
    />
    <FormErrorMessage>{errors[id]}</FormErrorMessage>
  </div>
);



return (
  <div className="flex justify-center">
    <form
      className="w-[600px] bg-white border shadow-md border-gray-300 rounded-md p-6 mb-5"
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label>Type of Land <span className="text-red-500">*</span></label>
        <select
          id="landType"
          value={formData.landType}
          onChange={onFormChange}
          className="h-10 border-2 mt-2 w-full border-gray-300 rounded-md px-2 focus:outline-none focus:border-teal-600"
          required
        >
          <option value="">Select Land Type</option>
          <option value="Agricultural">Agricultural</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
        </select>
        {errors.landType && <div style={{ color: "red" }}>{errors.landType}</div>}
      </div>

      {renderField("GI Tag Information", "giTag", "Enter GI Tag (if applicable)")}
      {renderField("Total Area", "area", "Enter Area (in sq ft)", "number", true)}
      {renderField("Identification Mark", "identificationMark", "Enter Identification Mark (if any)")}
      {renderField("Current Valuation", "currentValuation", "Enter Current Valuation", "number", true)}
      {renderField("Collector Rate", "collectorRate", "Enter Collector Rate", "number", true)}

      <FormControl isInvalid={!!errors.saleDeedFile} mb={4}>
        <FormLabel htmlFor="saleDeedFile">
          Upload Sale Deed <span className="text-red-500">*</span>
        </FormLabel>
        <input id="saleDeedFile" type="file" onChange={handleFileUpload} className="w-full" required
        />
        <FormErrorMessage>{errors.saleDeedFile}</FormErrorMessage>
      </FormControl>

      <Button type="submit" colorScheme="teal" size="lg" width="100%" marginTop={3} height={10}>
        Submit
      </Button>
    </form>
  </div>
);
};

export default Form;
