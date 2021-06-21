interface api {
  out: string;
}
function sendAndReceive() {
  const code: HTMLInputElement = document.getElementById(
    "code"
  ) as HTMLInputElement;
  fetch("/code", {
    method: "POST",
    body: JSON.stringify({ code: code.value }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((r) => r.json())
    .then(
      (d: api) =>
        (document.getElementById("output")!.innerHTML = d.out.replace(
          /</g,
          "<span><</span>"
        ))
    );
}
