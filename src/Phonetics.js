import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio}>Listen</a>
      <br></br>
      {props.phonetics.text}
    </div>
  );
}
