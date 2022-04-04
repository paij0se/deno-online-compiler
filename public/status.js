"use strict";
var json = fetch("/status");
json
    .then(function (r) {
    return r.json();
})
    .then(function (jsonData) {
    document.getElementById("status").innerHTML = jsonData.out;
});
