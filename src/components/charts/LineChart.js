import React from "react";
import { AxisOptions, Chart } from "react-charts";

export const kgArray = [];

export default function LineChart() {
  function* fare() {
    yield 1;
    yield 2;
  }
  for (let x of fare()) {
    console.log(x);
  }
  return <></>;
}
