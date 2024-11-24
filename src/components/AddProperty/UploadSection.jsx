import React from "react";
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Text,
  Image,
} from "@chakra-ui/react";
import uploadIcon from "../../assets/upload.png";

const UploadSection = ({ uploadedFiles, setUploadedFiles, errors, setErrors }) => {
  const handleFileUpload = (e) => {
    const { id, files } = e.target;

    if (files.length > 0) {
      const file = files[0];

      setUploadedFiles((prev) => ({
        ...prev,
        [id]: file,
      }));

      if (errors[id]) {
        setErrors((prev) => ({
          ...prev,
          [id]: "",
        }));
      }
    }
  };

  const renderUploadField = (title, id) => (
    <FormControl isInvalid={!!errors[id]} key={id} mb={8}>
      <FormLabel htmlFor={id} fontWeight="semibold">
        {title} <span style={{ color: 'red' }}> *</span>
      </FormLabel>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="2px dashed"
        borderColor="gray.300"
        borderRadius="md"
        height="250px"
        p={6}
        textAlign="center"
        bg="gray.50"
        _hover={{ borderColor: "teal.400" }}
      >
        <VStack spacing={5} alignItems="center">
          <Image src={uploadIcon} alt={`${title} Upload Icon`} boxSize="60px" />
          <Text color="gray.600">Select a file or drag and drop here</Text>
          <Input
            id={id}
            type="file"
            variant="unstyled"
            onChange={handleFileUpload}
            cursor="pointer"
            size="md"
          />
          {uploadedFiles[id] && (
            <Text fontSize="sm" color="green.500" mt={2} mb={4}>
              Uploaded: {uploadedFiles[id].name}
            </Text>
          )}
          <FormErrorMessage>{errors[id]}</FormErrorMessage>
        </VStack>
      </Box>
    </FormControl>
  );

  return (
    <Box
      borderWidth="1px"
      marginTop={4}
      height="750px"  
      width={"100%"}
      borderRadius="md"
      p={6}
      bg="white"
      shadow="lg"
    >
      <h2 className="text-2xl font-bold text-primary text-center mb-5">Upload Documents</h2>
      <div className="flex flex-col gap-7"> 
      {renderUploadField("Sale Deed", "saleDeed") }
      {renderUploadField("Agreement Document", "agreementDocument")}
      </div>
    </Box>
  );
};

export default UploadSection;
