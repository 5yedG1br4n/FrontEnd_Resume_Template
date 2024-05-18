import React from "react";
import Header from "./Header";
import Body from "./Body";

export default function App() {
  return (
    <div className="flex flex-col p-16">
      <Header fullName="SYED GIBRAN" jobProfile="FRONT END DEVELOPER" />
      <Body />
    </div>
  );
}
