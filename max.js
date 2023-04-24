import { readFileSync } from "node:fs";

function read() {
  const raw = readFileSync("./data.txt", { encoding: "utf-8" });
  const numbers = raw.split(" ");
  return numbers.filter((value) => value.length).map(Number);
}

function len(d) {
  return d.length;
}

function calcMax(list) {
  let max = list[0];

  for (let i = 1; i < list.length; i++) { // <-- loop "start"
    if (list[i] > max) {
      max = list[i];
    }
  } // <-- loop "end"
  
  return max;
}

const x = read();
console.log(calcMax(x));
console.log(calcMax([3, 4, 10]));
