// import { DollarSign } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <div>
      {/* <h1>Dashboard</h1>
      <p>Welcome to the dashboard</p> */}

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total User</CardTitle>
          {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1</div>
          <p className="text-xs text-muted-foreground">+1 from last week</p>
        </CardContent>
      </Card>
    </div>
  );
}
