<script>
  let faqs = [
    {
      question: "What is this website?",
      answer: "This is an online compiler for Deno.",
    },
    {
      question: "How do I use it?",
      answer:
        'You can write your Deno code in the editor and click on the "Run" button to execute it.',
    },
    {
      question: "What is Deno?",
      answer:
        "Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.",
    },

    {
      question: "Which API does this website use?",
      answer:
        "This website uses the api-deno-compiler: https://github.com/drpaij0se/api-deno-compiler",
    },
  ];
</script>

<svelte:head>
  <style>
    @import url("https://fonts.cdnfonts.com/css/cascadia-code");
  </style>
</svelte:head>
<div>
  {#each faqs as faq (faq.question)}
    <div class="faq">
      <div class="question">{faq.question}</div>
      <div class="answer">{faq.answer}</div>
    </div>
  {/each}
</div>

<button on:click={() => (window.location.href = "/")}>Back</button>

<style>
  .faq {
    margin-bottom: 1em;
    font-family: "Cascadia Code";
    font-size: 1.5rem;
  }
  .question {
    font-weight: bold;
    font-family: "Cascadia Code";
    font-size: 1.5rem;
  }
  button {
    font-family: "Cascadia Code";
    font-size: 2.5rem;
    padding: 0.5rem 1rem;
    margin: 1rem;
    border-radius: 0.5rem;
  }
</style>
