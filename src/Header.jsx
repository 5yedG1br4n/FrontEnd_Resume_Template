import React from "react";
import HeaderLinks from "./HeaderLinks";

export default function Header({ fullName, jobProfile }) {
  return (
    <header>
      <h1 className="font-Montserrat text-6xl tracking-wider">{fullName}</h1>
      <h2 className="font-Montserrat text-4xl mt-2">{jobProfile}</h2>
      <HeaderLinks email="5yed.g1br4n@gmail.com" phoneNumber="+91 9146645591" />
    </header>
  );
}
