import React from "react";
import TicketDisplay from "~/components/TicketDisplay";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="flex w-full justify-center">
      <TicketDisplay ticketId={id} />
    </div>
  );
}
