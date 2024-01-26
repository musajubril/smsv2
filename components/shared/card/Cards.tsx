import React from "react";
import Card from "./Card";

export default function Cards() {
  return (
    <div>
      <div className="py-4 grid grid-cols-3 gap-3">
        <Card number={1200} text="Total Students" intent="student"></Card>
        <Card number={1200} text="Total Staffs" intent="staff"></Card>
        <Card number={1200} text="Teachers" intent="teacher"></Card>
      </div>
    </div>
  );
}
