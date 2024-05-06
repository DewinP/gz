import TicketBoard from "~/components/TicketBoard";

import { api } from "~/trpc/server";

export default async function Home() {
  // const [filter, setFilter] = useState("new");
  const tickets = await api.ticket.getAllTicketsByUser();
  return (
    <div className="h-screen w-full">
      <div className="mx-auto  max-w-screen-lg ">
        <div className="max-w-7xl justify-center">
          <TicketBoard allTickets={tickets} />
        </div>
      </div>
    </div>
  );
}
