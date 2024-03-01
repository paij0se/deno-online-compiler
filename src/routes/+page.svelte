<script lang="ts">
  import CodeMirror from "svelte-codemirror-editor";
  import { javascript } from "@codemirror/lang-javascript";
  import { oneDark } from "@codemirror/theme-one-dark";
  import values from "../lib/codes";
  // random value
  interface Code {
    id: string;
    output: string;
  }
  let value = values[Math.floor(Math.random() * values.length)];

  let postRequestTime = null;
  const execute = async () => {
    // async timer to update the output
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
    const id = document.querySelector(".id");
    if (id) {
      id.textContent = `https://ad-c-9c338a775c74.herokuapp.com/code/${data.id}`;
    }
  };
</script>

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
        height: "20rem",
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
      {`// Output will be displayed here`}
    </code>
  </pre>
</div>

<style>
  .center {
    text-align: center;
    font-family: "Cascadia Code";
  }
  @font-face {
    font-family: "Cascadia Code";
    src: url("src/fonts/CascadiaCode.ttf") format("truetype");
  }
  .output {
    width: 1000px;
    max-width: 100%;
    margin: 0 auto;
    font-size: 1.1rem;
    color: #41ff00;
    background-color: black;
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
</style>
