// src/components/ResponseTabs.tsx
import React, { useState } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import clsx from "clsx";

export default function ResponseTabs() {
  const [color, setColor] = useState("info");
  const colors = {
    success: "bg-green-100 border-green-400",
    pending: "bg-yellow-100 border-yellow-400",
    failed: "bg-red-100 border-red-400",
  };
  return (
    <div className={clsx("p-4 border rounded", colors[color])}>
      <Tabs
        defaultValue="success"
        onChange={(val) => setColor(val)}
      >
        <TabItem value="success" label="🟢 Success">
          <pre>
{`{
  "status": true,
  "message": "Topup sedang diproses"
}`}
          </pre>
        </TabItem>
        <TabItem value="pending" label="🟡 Pending">
          <pre>
{`{
  "status": "pending",
  "message": "Menunggu konfirmasi"
}`}
          </pre>
        </TabItem>
        <TabItem value="failed" label="🔴 Failed">
          <pre>
{`{
  "status": false,
  "message": "Saldo tidak cukup"
}`}
          </pre>
        </TabItem>
      </Tabs>
    </div>
  );
}
