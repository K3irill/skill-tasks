"use strict";

// ᓚᘏᗢ    task 2

let value;

if (typeof value === "number" && value !== null) {
  console.log(`${value} - is number`);
} else if (typeof value === "string") {
  console.log(`${value} - is string`);
} else if (typeof value === "boolean") {
  console.log(`${value} - is boolean`);
} else console.log(` Type of '${value}' is not defined`);
