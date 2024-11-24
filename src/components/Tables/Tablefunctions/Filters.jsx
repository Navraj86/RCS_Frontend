import { SearchIcon } from '@chakra-ui/icons';
import { Box, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

const Filters = ({ columnFilters, setColumnFilters }) => {
    const taskName = columnFilters.find((f) => f.id === 'name')?.value || '';
    const onFilterChange = (id, value) => setColumnFilters(
        prev => prev.filter((f) => f.id !== id).concat({id, value})
    )
  return (
    <Box my={3}>
        <InputGroup size='sm' maxW='12rem' border="2px solid #000" borderRadius={5}>
            <InputLeftElement pointerEvents='none'>
                <Icon as={SearchIcon} />
            </InputLeftElement>
            <Input type='text' variant='filled' placeholder='Search' borderRadius={5} value={taskName} onChange={
                (e) => onFilterChange('name', e.target.value)
            } />
        </InputGroup>
    </Box>
  );
};

export default Filters;
