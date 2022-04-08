const json = fetch("/status");
json
  .then((r) => {
    return r.json();
  })
  .then((jsonData) => {
    document.getElementById("status")!.innerHTML = jsonData.out;
  });
const codesExamples: string[] = [
  `
import 'https://deno.land/x/corejs@v3.21.1/index.js'; // <- at the top of your entry point

Object.hasOwn({ foo: 42 }, 'foo');     // => true

[1, 2, 3, 4, 5, 6, 7].at(-3);          // => 5

[1, 2, 3, 4, 5].groupBy(it => it % 2); // => { 1: [1, 3, 5], 0: [2, 4] }

Promise.any([
  Promise.resolve(1),
  Promise.reject(2),
  Promise.resolve(3),
]).then(console.log);                  // => 1

[1, 2, 3, 4, 5, 6, 7].values()
  .drop(1)
  .take(5)
  .filter(it => it % 2)
  .map(it => it ** 2)
  .toArray();                          // => [9, 25]

  `,
  `
  function fizzbuzz(num: number): string | number {
  if (num % 15 === 0) return 'FizzBuzz';
  if (num % 5 === 0) return 'Buzz';
  if (num % 3 === 0) return 'Fizz';
  return num;
}

for (let i: number = 1; i <= 100; i++) console.log(fizzbuzz(i));

`,
  `
function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function hello(name: string): string {
  return "Hello " + capitalize(name);
}

console.log(hello("john"));
console.log(hello("Sarah"));
console.log(hello("kai"));

`,
  `
import {
  add,
  multiply,
} from "https://x.nest.land/ramda@0.27.0/source/index.js";

function totalCost(outbound: number, inbound: number, tax: number): number {
  return multiply(add(outbound, inbound), tax);
}

console.log(totalCost(19, 31, 1.2));
console.log(totalCost(45, 27, 1.15));

`,
  `
/**
 * Output: JSON Data
 */
const jsonResponse = await fetch("https://api.github.com/users/bruh-boys");
const jsonData = await jsonResponse.json();
console.log(jsonData);

`,
  `
import { copy } from "https://deno.land/std@0.134.0/streams/conversion.ts";
const listener = Deno.listen({ port: 8080 });
console.log("listening on 0.0.0.0:8080");
for await (const conn of listener) {
  copy(conn, conn).finally(() => conn.close());
}

`,
  `
import { pathToRegexp } from "https://cdn.skypack.dev/path-to-regexp?dts";

const re = pathToRegexp("/path/:id");
console.log(re)
`,
  `
console.log(Deno.memoryUsage());
`,
];
const randomIndex = Math.floor(Math.random() * codesExamples.length);
document.getElementById("code")!.innerHTML = codesExamples[randomIndex];
