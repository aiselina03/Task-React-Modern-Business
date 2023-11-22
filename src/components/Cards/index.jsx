import Card from "../Card";
import "./style.css"
import React from "react";



function Cards() {
  return (
    <div>
      <div className="cards">
      <Card />
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  )
}

export default Cards