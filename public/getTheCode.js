"use strict";
function sendAndReceive() {
    var code = document.getElementById("code");
    fetch("/code", {
        method: "POST",
        body: JSON.stringify({ code: code.value }),
        headers: {
            "content-type": "application/json",
        },
    })
        .then(function (r) { return r.json(); })
        .then(function (d) {
        return (document.getElementById("output").innerHTML = d.out.replace(/</g, "<span><</span>"));
    });
}
