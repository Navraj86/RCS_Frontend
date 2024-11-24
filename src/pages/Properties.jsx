import React, { useState } from "react";
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Properties = () => {
  const navigate = useNavigate();
  const [selectedRow, setSelectedRow] = useState(null);

  const [properties, setProperties] = useState([
    {
      id: 1,
      address: "Greenfield Estate",
      area: "2000 sqft",
      landType: "Agricultural",
      valuationAtPurchase: "₹40,00,000",
      currentValuation: "₹50,00,000",
      collectorRate: "₹45,00,000",
      biddingStatus: false,
      isAssigned: false,
    },
    {
      id: 2,
      address: "Rose Villa",
      area: "1500 sqft",
      landType: "Residential",
      valuationAtPurchase: "₹80,00,000",
      currentValuation: "₹1,00,00,000",
      collectorRate: "₹85,00,000",
      biddingStatus: false,
      isAssigned: false,
    },
  ]);

  const toggleBidding = (id) => {
    setProperties((prevProperties) =>
      prevProperties.map((property) =>
        property.id === id
          ? { ...property, biddingStatus: !property.biddingStatus }
          : property
      )
    );
  };

  const handleAssign = (id) => {
    setProperties((prevProperties) =>
      prevProperties.map((property) =>
        property.id === id ? { ...property, isAssigned: true } : property
      )
    );
    navigate("/leeseAgreement");
  };

  const handleRowClick = (id) => {
    setSelectedRow(selectedRow === id ? null : id); 
  };

  return (
    <Box p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Box fontSize="xl" fontWeight="bold">
          Properties
        </Box>
        <Button colorScheme="teal" onClick={() => navigate("/addproperty")}>
          Add New Property
        </Button>
      </Flex>

      <TableContainer>
        <Table size="sm" variant="simple" colorScheme="teal">
          <Thead>
            <Tr bg="gray.100">
              <Th textAlign="center">ID</Th>
              <Th textAlign="center">Address</Th>
              <Th textAlign="center">Area</Th>
              <Th textAlign="center">Land Type</Th>
              <Th textAlign="center">Valuation at Purchase Time</Th>
              <Th textAlign="center">Current Valuation</Th>
              <Th textAlign="center">Collector Rate</Th>
              <Th textAlign="center">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {properties.map((property) => (
              <Tr
                key={property.id}
                bg={selectedRow === property.id ? "teal.100" : "white"} 
                onClick={() => handleRowClick(property.id)}
              >
                <Td textAlign="center">{property.id}</Td>
                <Td textAlign="center">{property.address}</Td>
                <Td textAlign="center">{property.area}</Td>
                <Td textAlign="center">{property.landType}</Td>
                <Td textAlign="center">{property.valuationAtPurchase}</Td>
                <Td textAlign="center">{property.currentValuation}</Td>
                <Td textAlign="center">{property.collectorRate}</Td>
                <Td textAlign="center" display="flex" justifyContent="center">
                  <Button
                    colorScheme={property.biddingStatus ? "red" : "green"}
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBidding(property.id);
                    }}
                    mr={2}
                  >
                    {property.biddingStatus
                      ? "Remove From Bidding"
                      : "Add To Bidding"}
                  </Button>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAssign(property.id);
                    }}
                  >
                    {property.isAssigned ? "View Lease" : "Assign to Lease"}
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Properties;
