const json = fetch("/status");

json.then((r) => {
  return r.json();
}).then((jsonData) => {
  document.getElementById("status")!.innerHTML = jsonData.out;
});
