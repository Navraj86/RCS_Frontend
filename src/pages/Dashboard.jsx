import { Box, Button, Tab, Tabs, TabPanel, TabPanels, TabList, TabIndicator } from "@chakra-ui/react";
import PropertyInfoTable from "../components/Tables/PropertyInfoTable";
import LeaseAgreementTable from "../components/Tables/LeaseAgreementTable";

const Dashboard = () => {
  return (
    <Tabs position='relative' variant='unstyled' className="my-7 mx-10">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <TabList>
          <Tab>Property Information</Tab>
          <Tab>Lease Agreement</Tab>
        </TabList>
        <Box>
          <Button colorScheme="teal" mr="2">Add User</Button>
          <Button colorScheme="teal">Add Property</Button>
        </Box>
      </Box>
      <TabIndicator mt='-1.5px' height='2px' bg='color.teal' borderRadius='1px' />
      <TabPanels>
        <TabPanel p={0} py={2}>
          <PropertyInfoTable />
        </TabPanel>
        <TabPanel p={0} py={2}>
          <LeaseAgreementTable />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Dashboard;
