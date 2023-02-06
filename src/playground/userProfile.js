import { Button } from "../components/button";
import Header from "../components/newHeader";
import { Plus } from "react-feather";
import { useState } from "react";
import { Main } from "../components/main";

export default function Buttons() {
  return (
    <>
      <Header
        custom="true"
        topTitle="My profile"
        home="true"
        user="James Toone"
        programme="Business Analytics Online 2020"
      />
      <Main className="mt-2">
        <div className="tabHeader flex">Help</div>
      </Main>
    </>
  );
}
