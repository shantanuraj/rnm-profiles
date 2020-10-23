import * as React from "react";

export function Stat({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="stat-info">
      <span className="stat-key">{left}</span>:{" "}
      <span className="stat-value">{right}</span>
    </div>
  );
}
