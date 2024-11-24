import { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  VStack,
  Button,
  Heading,
} from "@chakra-ui/react";
import Form from "../components/PropertyForm";
import UploadSection from "../components/PropertyUpload";
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    aadhaar: "",
    landType: "",
    yearOfAcquisition: "",
    giTag: "",
    area: "",
    identificationMark: "",
    valuationAtPurchase: "",
    currentValuation: "",
    collectorRate: "",
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    saleDeed: null,
    agreementDocument: null,
  });

  const [errors, setErrors] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitAttempted(true);

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
      console.log("Uploaded Files:", uploadedFiles);
      alert("New Property Added!");
      setFormData({
        name: "",
        fatherName: "",
        aadhaar: "",
        landType: "",
        yearOfAcquisition: "",
        giTag: "",
        area: "",
        identificationMark: "",
        valuationAtPurchase: "",
        currentValuation: "",
        collectorRate: "",
      });
      setUploadedFiles({
        saleDeed: null,
        agreementDocument: null,
      });
      navigate("/properties");

    } else {
      alert("Fill all the required fields.");
    }
  };
  
  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "giTag" && key !== "identificationMark") {
        newErrors[key] = `${key} is required`;
      }
    });

    if (!uploadedFiles.saleDeed) {
      newErrors.saleDeed = "Sale Deed is required";
    }

    if (!uploadedFiles.agreementDocument) {
      newErrors.agreementDocument = "Agreement Document is required";
    }

    return newErrors;
  };

  return (
    <Box p={6}>
      <form onSubmit={handleSubmit}>
        <Heading as="h1" size="lg" textAlign="center" mb={6} color="teal.600">
          Add Property Details
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
          <GridItem>
            <Form
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
            />
          </GridItem>
          <GridItem>
            <VStack spacing={6}>
              <UploadSection
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
                errors={errors}
                setErrors={setErrors}
              />
              <Button type="submit" colorScheme="teal" size="lg" marginTop={8} width="full">
                Submit
              </Button>
            </VStack>
          </GridItem>
        </Grid>
      </form>
    </Box>
  );
};

export default AddProperty;
