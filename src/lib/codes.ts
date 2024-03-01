let values: string[] = [
  `console.log(Deno.version)`,
  `function fizzbuzz(num: number): string | number {
    if (num % 15 === 0) return "FizzBuzz";
    if (num % 5 === 0) return "Buzz";
    if (num % 3 === 0) return "Fizz";
    return num;
  }
for (let i: number = 1; i <= 100; i++) console.log(fizzbuzz(i));`,
  `function handler(_req: Request): Response {
  return new Response("Hello, World!");
}

Deno.serve(handler);
  `,
  `let url = new URL("https://deno.land/manual/introduction");

url = new URL("/manual/introduction", "https://deno.land");

console.log(url.href); // https://deno.land/manual/introduction

console.log(url.host); // deno.land
console.log(url.origin); // https://deno.land
console.log(url.pathname); // /manual/introduction
console.log(url.protocol); // https:

url = new URL("https://deno.land/api?s=Deno.readFile");

console.log(url.searchParams.get("s")); // Deno.readFile

url.host = "deno.com";
url.protocol = "http:";

console.log(url.href); // http://deno.com/api?s=Deno.readFile`,
  `const a = await Deno.resolveDns("example.com", "A");
console.log(a);

const mx = await Deno.resolveDns("example.com", "MX");
console.log(mx);

const aaaa = await Deno.resolveDns("example.com", "AAAA", {
  nameServer: { ipAddr: "8.8.8.8", port: 53 },
});
console.log(aaaa);`,
];
export default values;
