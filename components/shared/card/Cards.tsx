import React from "react";
import Card from "./Card";

export default function Cards() {
  return (
    <div>
      <div className=" grid grid-cols-3 gap-3">
        <Card number={1200} text="Students" intent="student"></Card>
        <Card number={1200} text="Total Staffs" intent="staff"></Card>
        <Card number={1200} text="Teachers" intent="teacher"></Card>
      </div>
    </div>
  );
}
