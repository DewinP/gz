import React from "react";
import { DataTable } from "~/components/DataTable";

import { api } from "~/trpc/server";

const page = async () => {
  const tickets = await api.ticket.getAllTicketsByUser();

  return (
    <main className="grid flex-1 ">
      <DataTable tickets={tickets} />
    </main>
  );
};

export default page;
