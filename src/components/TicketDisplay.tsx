import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { Textarea } from "~/components/ui/textarea";

const TicketDisplay = () => {
  return (
    <ScrollArea className="h-[calc(100vh-73px)] w-full">
      <div className="flex flex-1 flex-col">
        <div className="flex items-start p-4">
          <div className="flex items-start gap-4 text-sm">
            <Avatar>
              <AvatarImage alt="John Doe" />
              <AvatarFallback>
                {"John Doe"
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="font-semibold">John Doe</div>
              <div className="line-clamp-1 text-xs">Question Asked</div>
              <div className="line-clamp-1 text-xs">
                <span className="font-medium">Reply-To:</span> johndoe@gmail.com
              </div>
            </div>
          </div>
          <div className="ml-auto text-xs text-muted-foreground">
            20/02/2024
          </div>
        </div>
        <Separator />
        <div className="whitespace-pre-wrap p-4 text-sm">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias excepturi sint occaecati cupiditate non provident, similique
          sunt in culpa qui officia deserunt mollitia animi, id est laborum et
          dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusda Itaque earum rerum hic tenetur a sapiente delectus, ut
          aut reiciendis voluptatibus maiores alias consequatur aut perferendis
          doloribus At vero eos et accusamus et iusto odio dignissimos ducimus
          qui blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores et quas molestias excepturi sint occaecati cupiditate non
          provident, similique sunt in culpa qui officia deserunt mollitia
          animi, id est At vero eos et accusamus et iusto odio dignissimos
          ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
          quos dolores et quas autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus At vero eos et accusamus et iust autem quibusdam
          et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae. Itaque earum
          rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores
          repellat.
        </div>
        <Separator className="mt-auto" />
        <div className="p-4">
          <form>
            <div className="grid gap-4">
              <Textarea className="p-4" placeholder={`Reply to John Doe...`} />
              <div className="flex items-center">
                <Button size="sm" className="ml-auto">
                  Post Comment
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="flex-1 border-t border-gray-300 dark:border-gray-700" />
        <div className="px-4 font-medium text-gray-500 dark:text-gray-400">
          Comments
        </div>
        <div className="flex-1 border-t border-gray-300 dark:border-gray-700" />
      </div>
      <Card className="m-8 gap-2 p-8">
        <Badge>Doe John</Badge>
        <CardContent className="p-0 pt-2">
          et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae. Itaque earum
          rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores
        </CardContent>
      </Card>
      <Card className="m-8 gap-2 p-8">
        <Badge>Doe John</Badge>
        <CardContent className="p-0 pt-2">
          et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae. Itaque earum
          rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores
        </CardContent>
      </Card>
      <Card className="m-8 gap-2 p-8">
        <Badge>Doe John</Badge>
        <CardContent className="p-0 pt-2">
          et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae. Itaque earum
          rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores
        </CardContent>
      </Card>
    </ScrollArea>
  );
};

export default TicketDisplay;
