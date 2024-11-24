import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
  Heading,
} from "@chakra-ui/react";


const Form = ({ formData = {}, setFormData, errors = {}, setErrors }) => {
  const onFormChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    if (value.trim() === "") {
      setErrors((prev) => ({ ...prev, [id]: "This field is required" }));
    } else {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const renderField = (label, id, placeholder, type = "text", isRequired = false) => (
    <FormControl isInvalid={!!errors[id]} mb={2} key={id}>
      <FormLabel htmlFor={id}>
        {label}
        {isRequired && <span className="text-red-500"> *</span>}
      </FormLabel>
      <Input
        id={id}
        placeholder={placeholder}
        value={formData[id]}
        onChange={onFormChange}
        focusBorderColor="teal.500"
        type={type}
      />
      <FormErrorMessage>{errors[id]}</FormErrorMessage>
    </FormControl>
  );

  return (
    <div>
      <Box borderWidth="1px" borderRadius="md" p={4} my={4} bg="white" shadow="md">
        <Heading size="md" mb={4}>
          From Whom It was Acquired
        </Heading>
        {renderField("Name", "name", "Enter Name", "text", true)}
        {renderField("Father's Name", "fatherName", "Enter Father's Name", "text", true)}
        {renderField("Aadhaar Card Number", "aadhaar", "Enter Aadhaar Number", "text", true)}
      </Box>

        <FormControl isInvalid={!!errors.landType} mb={2}>
          <FormLabel htmlFor="landType">
            Type of Land <span className="text-red-500"> *</span>
          </FormLabel>
          <Select
            id="landType"
            placeholder="Select Type"
            value={formData.landType}
            onChange={onFormChange}
            focusBorderColor="teal.500"
          >
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Agricultural">Agricultural</option>
          </Select>
          <FormErrorMessage>{errors.landType}</FormErrorMessage>
        </FormControl>

        {renderField("Year of Acquisition", "yearOfAcquisition", "Enter Year (YYYY)", "text", true)}
        {renderField("GI Tag Information", "giTag", "Enter GI Tag (if applicable)")}
        {renderField("Total Area", "area", "Enter Area (in sq ft)", "text", true)}
        {renderField("Valuation at Purchase Time", "valuationAtPurchase", "Enter Valuation", "text", true)}
        {renderField("Current Valuation", "currentValuation", "Enter Current Valuation", "text", true)}
        {renderField("Collector Rate", "collectorRate", "Enter Collector Rate", "text", true)}
    
    </div>
  );
};

export default Form;
