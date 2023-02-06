import { Button } from "../components/button";
import Header from "../components/header";
import { Plus } from "react-feather";
import { useState } from "react";

export default function Buttons() {
  const [userTab, setUserTab] = useState(true);
  return (
    <>
      <Header
        custom="true"
        topTitle="People"
        bottomTitle={userTab ? "All users" : "Admin users"}
        home="true"
      />
      <main className="mt-2">
        <div className="tabHeader flex gap-2">
          <Button label="All" onClick={() => setUserTab(true)} />
          <Button label="Admin users" onClick={() => setUserTab(false)} />
          <Button label="Students" onClick={() => setUserTab(false)} />
          <Button label="Team Members" onClick={() => setUserTab(false)} />
        </div>
      </main>
    </>
  );
}
