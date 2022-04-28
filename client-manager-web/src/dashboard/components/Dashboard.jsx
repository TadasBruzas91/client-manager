import React, { useState, useEffect } from "react";
import { dashboard } from "../logic/dashboard";

export default function Dashboard() {
  const [totalClients, setTotalClients] = useState(null);
  useEffect(() => {
    dashboard.setupSetAllClientsCount(setTotalClients);
    dashboard.getAllClientsCount();
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        All clients <b>{totalClients ? totalClients : "-"}</b>
      </p>
    </div>
  );
}
