import TicketBoard from "~/components/TicketBoard";

import { api } from "~/trpc/server";

export default async function Home() {
  const tickets = await api.ticket.getAllTicketsByUser();
  return (
    <div className="h-screen w-full">
      <TicketBoard allTickets={tickets} />
    </div>
  );
}
