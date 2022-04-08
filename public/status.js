"use strict";
var json = fetch("/status");
json
    .then(function (r) {
    return r.json();
})
    .then(function (jsonData) {
    document.getElementById("status").innerHTML = jsonData.out;
});
var codesExamples = [
    "\nimport 'https://deno.land/x/corejs@v3.21.1/index.js'; // <- at the top of your entry point\n\nObject.hasOwn({ foo: 42 }, 'foo');     // => true\n\n[1, 2, 3, 4, 5, 6, 7].at(-3);          // => 5\n\n[1, 2, 3, 4, 5].groupBy(it => it % 2); // => { 1: [1, 3, 5], 0: [2, 4] }\n\nPromise.any([\n  Promise.resolve(1),\n  Promise.reject(2),\n  Promise.resolve(3),\n]).then(console.log);                  // => 1\n\n[1, 2, 3, 4, 5, 6, 7].values()\n  .drop(1)\n  .take(5)\n  .filter(it => it % 2)\n  .map(it => it ** 2)\n  .toArray();                          // => [9, 25]\n\n  ",
    "\n  function fizzbuzz(num: number): string | number {\n  if (num % 15 === 0) return 'FizzBuzz';\n  if (num % 5 === 0) return 'Buzz';\n  if (num % 3 === 0) return 'Fizz';\n  return num;\n}\n\nfor (let i: number = 1; i <= 100; i++) console.log(fizzbuzz(i));\n\n",
    "\nfunction capitalize(word: string): string {\n  return word.charAt(0).toUpperCase() + word.slice(1);\n}\n\nfunction hello(name: string): string {\n  return \"Hello \" + capitalize(name);\n}\n\nconsole.log(hello(\"john\"));\nconsole.log(hello(\"Sarah\"));\nconsole.log(hello(\"kai\"));\n\n",
    "\nimport {\n  add,\n  multiply,\n} from \"https://x.nest.land/ramda@0.27.0/source/index.js\";\n\nfunction totalCost(outbound: number, inbound: number, tax: number): number {\n  return multiply(add(outbound, inbound), tax);\n}\n\nconsole.log(totalCost(19, 31, 1.2));\nconsole.log(totalCost(45, 27, 1.15));\n\n",
    "\n/**\n * Output: JSON Data\n */\nconst jsonResponse = await fetch(\"https://api.github.com/users/bruh-boys\");\nconst jsonData = await jsonResponse.json();\nconsole.log(jsonData);\n\n",
    "\nimport { copy } from \"https://deno.land/std@0.134.0/streams/conversion.ts\";\nconst listener = Deno.listen({ port: 8080 });\nconsole.log(\"listening on 0.0.0.0:8080\");\nfor await (const conn of listener) {\n  copy(conn, conn).finally(() => conn.close());\n}\n\n",
    "\nimport { pathToRegexp } from \"https://cdn.skypack.dev/path-to-regexp?dts\";\n\nconst re = pathToRegexp(\"/path/:id\");\nconsole.log(re)\n",
    "\nconsole.log(Deno.memoryUsage());\n",
];
var randomIndex = Math.floor(Math.random() * codesExamples.length);
document.getElementById("code").innerHTML = codesExamples[randomIndex];
