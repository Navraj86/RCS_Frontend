import { useState } from "react";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { Box, Button, ButtonGroup, Icon, Text } from "@chakra-ui/react";
import { LAIGLDATA } from "../../data/LADATA";
import Filters from "./Tablefunctions/Filters";
import SortIcon from "../../assets/icons/SortIcon";

const columns = [
  {
    accessorKey: 'Lease ID',
    header: "Lease Id",
    size: 135,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'Name',
    header: "Name",
    size: 120,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'Aadhar Number',
    header: "Aadhar No.",
    size: 130,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'Year of Lease',
    header: "Year of Lease",
    size: 120,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'Purpose of Lease',
    header: "Purpose of Lease",
    size: 130,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'Upload Lease Agreement',
    header: "Upload Lease Agreement",
    size: 140,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'Date of Lease Agreement Signing',
    header: "Date of Lease Agreement Signing",
    size: 150,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'Lease Valuation',
    header: "Lease Valuation",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'Next Due Date',
    header: "Next Due Date",
    size: 120,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'Installment Due',
    header: "Installment Due",
    size: 120,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'Interest on Overdue',
    header: "Interest on Overdue",
    size: 120,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'Payment Mode',
    header: "Payment Mode",
    size: 120,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'Due Dates for Installments',
    header: "Due Dates for Installments",
    size: 130,
    cell: (props) => <p>{props.getValue()[0]}</p>
  },
  {
    accessorKey: 'Interest Calculation',
    header: "Interest Calculation",
    size: 130,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'Lease Agreement',
    header: "Lease Agreement",
    size: 200,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'Payment Receipts',
    header: "Payment Receipts",
    size: 130,
    cell: (props) => <p>{props.getValue()[0]}</p>
  },
]

const IncomeGenerationLease = () => {
  const [data, setData] = useState(LAIGLDATA);
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

export default IncomeGenerationLease;
