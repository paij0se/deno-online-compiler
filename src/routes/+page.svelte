<script lang="ts">
  import CodeMirror from "svelte-codemirror-editor";
  import { javascript } from "@codemirror/lang-javascript";
  import { oneDark } from "@codemirror/theme-one-dark";
  import { browser } from "$app/environment";
  import values from "../lib/codes";
  interface Code {
    id: string;
    output: string;
  }
  let value = values[Math.floor(Math.random() * values.length)];
  let postRequestTime = null;
  const execute = async () => {
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
</script>

<svelte:head>
  <style>
    @import url("https://fonts.cdnfonts.com/css/cascadia-code");
  </style>
</svelte:head>

<div class="center">
  <h1>Deno Playground</h1>
</div>
<div class="codemirror">
  <CodeMirror
    bind:value
    lang={javascript()}
    theme={oneDark}
    styles={{
      "&": {
        width: "1000px",
        maxWidth: "100%",
        height: "20rem auto",
        margin: "0 auto",
        fontSize: "1.1rem",
        fontFamily: "Cascadia Code",
      },
    }}
  />
</div>

<div class="center">
  <button on:click={execute}>Run</button>
</div>

<div class="center">
  <div class="timer"></div>
  <div class="id"></div>
  <h2>Output</h2>
</div>
<div class="output">
  <pre>
    <code>
      // Output will be displayed here
    </code>
  </pre>
</div>

<style>
  :global(body) {
    background-color: #f4ebd3;
  }
  .center {
    text-align: center;
    font-family: "Cascadia Code";
  }
  .output {
    font-size: 1.1rem;
    color: #41ff00;
    background-color: black;
    /* Make it Responsive */
    width: 100%;
    max-width: 1000px; /* Set your desired maximum width */
    margin: 0 auto;
    padding: 1rem;
  }
  .output pre code {
    font-family: "Cascadia Code";
  }
  h1 {
    font-family: "Cascadia Code";
    font-size: 4rem;
  }
  h2 {
    font-family: "Cascadia Code";
    font-size: 3rem;
  }
  :global(.cm-s-one-dark) {
    font-family: "Cascadia Code";
  }
  button {
    font-family: "Cascadia Code";
    font-size: 2.5rem;
    padding: 0.5rem 1rem;
    margin: 1rem;
    border-radius: 0.5rem;
  }

  /* Media Query for responsiveness */
  @media only screen and (max-width: 1000px) {
    .output {
      padding: 0.5rem;
    }
  }
</style>
