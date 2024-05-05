import {
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
  Turtle,
} from "lucide-react";
import TicketItem from "~/components/TicketItem";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div className="mx-auto  max-w-screen-lg ">
        <div className="w-full p-8 text-start">
          <h1 className="bold font-bold">All my tickets</h1>
        </div>
        <div className="max-w-7xl justify-center">
          <TicketItem flag={true} />
        </div>
      </div>
    </div>
  );
}
