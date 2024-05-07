"use client";

import * as React from "react";

import type {
  ColumnDef,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { ChevronDown, ChevronsUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "~/server/api/root";
import TicketBadge from "~/components/TicketBadge";
import Link from "next/link";
import { formatTimeSince } from "~/lib/utils";

type Ticket = inferRouterOutputs<AppRouter>["ticket"]["getAllTicketsByUser"][0];

export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "ticketDisplayId",
    header: "Ticket #",
    cell: ({ row }) => (
      <div className="uppercase">{row.getValue("ticketDisplayId")}</div>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <div>{row.getValue("title")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <div className="flex items-center">
        <span className="sr-only">Sort by status</span>
        {column.getCanSort() && (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting()}
            className="mr-2"
          >
            Status
            <ChevronsUpDown className="h-4 w-4 self-center" />
          </Button>
        )}
      </div>
    ),
    cell: ({ row }) => (
      <TicketBadge status={row.getValue<Ticket["status"]>("status")} />
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },

  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <div className="flex items-center justify-center ">
        <span className="sr-only">Sort by updatedAt</span>
        {column.getCanSort() && (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting()}
            className="mr-2"
          >
            Last Updated
            <ChevronsUpDown className="h-4 w-4 self-center" />
          </Button>
        )}
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex justify-center">
        {formatTimeSince(row.getValue("updatedAt"))}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const ticket = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <Link href={`/tickets/${ticket.id}`}>
              <DropdownMenuItem>View ticket details</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTable({ tickets }: { tickets: Ticket[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [filter, setFilter] = React.useState<string>("");
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable({
    data: tickets,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnVisibility,
    },
  });

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Search by ticket ID, email, or title..."
          value={filter}
          onChange={(event) => {
            table.setGlobalFilter(event.target.value);
            setFilter(event.target.value);
          }}
          className="max-w-sm"
        />

        <div className="flex items-center  space-x-2 self-end py-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Hide Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous Page
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next Page
            </Button>
          </div>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
