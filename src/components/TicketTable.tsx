import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export default function TicketsTable() {
  return (
    <Card className="h-full">
      <CardHeader className="px-7">
        <CardTitle>Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead className=" sm:table-cell">Title</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="hidden text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-medium">Olivia Smith</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  olivia@example.com
                </div>
              </TableCell>
              <TableCell className="sm:table-cell">
                Something happened with my prescription
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="default">
                  New
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
              <TableCell className="hidden text-right">$150.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
