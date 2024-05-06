"use client";

import { Label } from "@radix-ui/react-dropdown-menu";
import { Settings, Rabbit, Bird, Turtle, User } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "~/components/ui/drawer";
import { Textarea } from "~/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useSession } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="top-0 z-10 flex h-[73px] items-center gap-1 border-b bg-background p-8">
      <h1 className="text-lg font-bold">Z - Ticketing System</h1>
    </header>
  );
};

export default Header;
