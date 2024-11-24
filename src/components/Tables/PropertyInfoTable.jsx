import { useState } from "react";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { Box, Button, ButtonGroup, Icon, Text } from "@chakra-ui/react";
import PADATA from "../../data/PADATA";
import Filters from "./Tablefunctions/Filters";
import SortIcon from "../../assets/icons/SortIcon";

const columns = [
  {
    accessorKey: 'propertyId',
    header: "Property Id",
    size: 135,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'name',
    header: "Name",
    size: 120,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'fatherName',
    header: "Father Name",
    size: 120,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'aadharNumber',
    header: "Aadhar No.",
    size: 130,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'typeOfLand',
    header: "Type of Land",
    size: 120,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'yearOfAcquisition',
    header: "Year of Acquisition",
    size: 130,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'giTagInformation',
    header: "GI Tag Info",
    size: 140,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'totalArea',
    header: "Total Area",
    size: 100,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'identificationMark',
    header: "Identification Mark",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'valuationAtPurchase',
    header: "Valuation At Purchase",
    size: 120,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'currentValuation',
    header: "Current Valuation",
    size: 120,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'collectorRate.2024',
    header: "Collector Rate",
    size: 120,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'saleDeed',
    header: "Sale Deed",
    size: 100,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'agreementDocument',
    header: "Agreement Document",
    size: 130,
    cell: (props) => <p>{props.getValue()}</p>
  },
]

const PropertyInfoTable = () => {
  const [data, setData] = useState(PADATA);
  const [columnFilters, setColumnFilters] = useState([]);
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel:getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode:"onChange",
  });
  console.log(table.getHeaderGroups());
  return (
    <Box>
      <Filters columnFilters={columnFilters} setColumnFilters={setColumnFilters} />
      <Box overflowX="auto" maxW="100%" className="border-2 border-solid border-gray-400 scrollbar-thin scrollbar-track-zinc-700 scrollbar-thumb-zinc-500" w={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Box className="flex w-fit" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Box className="group relative flex justify-center items-center p-2 font-bold text-xs uppercase text-center text-black shadow-[inset_0_0_0_1px_#9ca3af]" w={header.getSize()} key={header.id}>
                {header.column.columnDef.header}
                {header.column.getCanSort() && <Icon as={SortIcon} mx={3} fontSize={14} onClick={header.column.getToggleSortingHandler()} />}
                {
                  {asc: " 🔼", desc: " 🔽"}[header.column.getIsSorted()]
                }
                <Box onMouseDown={header.getResizeHandler()} onTouchStart={header.getResizeHandler()} className={`absolute opacity-0 top-0 right-0 h-full w-1 bg-primary cursor-col-resize select-none touch-none rounded-md group-hover:opacity-100 ${header.column.getIsResizing() ? "bg-[#4FD1C5] opacity-1" : ""}`}></Box>
              </Box>
            ))}
          </Box>
        ))}
        {
          table.getRowModel().rows.map((row) => (
            <Box className="flex w-fit" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Box className="relative flex justify-center items-center p-2 font-bold text-xs uppercase text-center text-black shadow-[inset_0_0_0_1px_#9ca3af]" w={cell.column.getSize()} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Box>
              ))}
            </Box>
          ))
        }
      </Box>
      <br />
      <Text mb={2}>
        Page {table.getState().pagination.pageIndex + 1} of {" "}
        {table.getPageCount()}
      </Text>
      <ButtonGroup size="sm" mr={2} isAttached colorScheme="teal" variant="solid">
        <Button onClick={() => (table.previousPage())} isDisabled={!table.getCanPreviousPage()}>{"<"}</Button>
        <Button onClick={() => (table.nextPage())} isDisabled={!table.getCanNextPage()}>{">"}</Button>
      </ButtonGroup>
      <ButtonGroup size="sm" isAttached colorScheme="teal" variant="solid">
        <Button onClick={() => (table.setPageIndex(0))} isDisabled={!table.getCanPreviousPage()}>{"|<<"}</Button>
        <Button onClick={() => (table.setPageIndex(table.getPageCount() - 1))} isDisabled={!table.getCanNextPage()}>{">>|"}</Button>
      </ButtonGroup>
    </Box>
  );
};

export default PropertyInfoTable;