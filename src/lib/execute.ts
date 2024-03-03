interface Code {
  id: string;
  output: string;
}
let postRequestTime = null;

export const execute = async (value: string) => {
  const startTime = performance.now();
  const res = await fetch("https://ad-c-9c338a775c74.herokuapp.com/code", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code: value }),
  });
  const endTime = performance.now();
  const data: Code = await res.json();
  const outputElement = document.querySelector(".output pre code");
  if (outputElement) {
    outputElement.textContent = data.output;
  }
  postRequestTime = endTime - startTime;
  console.log(
    "Time taken to post request: ",
    postRequestTime.toFixed(2) + "ms"
  );
  const timer: HTMLDivElement = document.querySelector(".timer")!;
  if (timer) {
    if (postRequestTime > 1500) {
      timer.textContent = `Took: ${postRequestTime.toFixed(2)}ms`;
      timer.style.color = "red";
    } else {
      timer.textContent = `Took ${postRequestTime.toFixed(2)}ms`;
      timer.style.color = "green";
    }
  }
  // show the id of the code snippet
  const id = document.createElement("a");
  if (id) {
    id.textContent = `Share code snippet`;
    id.href = `https://ad-c-9c338a775c74.herokuapp.com/code/${data.id}`;
    id.target = "_blank";
    id.style.color = "blue";
    const idElement = document.querySelector(".id");
    if (idElement) {
      idElement.innerHTML = "";
      idElement.appendChild(id);
    }
  }
};
