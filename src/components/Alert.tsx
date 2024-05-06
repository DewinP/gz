import { Terminal } from "lucide-react";

import { Alert, AlertTitle } from "~/components/ui/alert";

export function AdminAlert() {
  return (
    <Alert variant="destructive" className="rounded-none">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Admin Dashboard</AlertTitle>
    </Alert>
  );
}
