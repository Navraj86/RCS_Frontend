import { Tab, Tabs, TabPanel, TabPanels, TabList } from "@chakra-ui/react";
import IncomeGenerationLease from "./IncomeGenerationLease";
import DonationLease from "./DonationLease";

const LeaseAgreementTable = () => {
  return (
    <Tabs mx={8} my={5} variant='soft-rounded' colorScheme='teal'>
      <TabList>
        <Tab>Income Gen. Lease</Tab>
        <Tab>Donation Lease</Tab>
      </TabList>
      <TabPanels>
        <TabPanel p={0} py={2}>
          <IncomeGenerationLease />
        </TabPanel>
        <TabPanel p={0} py={2}>
          <DonationLease />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default LeaseAgreementTable;
