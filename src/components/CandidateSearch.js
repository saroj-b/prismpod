import React, { Component, useEffect, useState } from "react";
import './css/addcandidate.css';
import Head from './Head';
import Datatable from './datatable';
require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function Candidatesearch() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch("https://xvc2hr1788.execute-api.us-east-1.amazonaws.com/dev/Get_Candidate")
    .then((response) => response.json())
    .then((json) => setData(json))
  }, [])
  
  return(
    <div>
      <div>filter goes here</div>
      <div>
        <Datatable data={data} />
      </div>
    </div>
  );
}