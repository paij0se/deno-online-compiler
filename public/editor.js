var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineNumbers: true,
  matchBrackets: true,
  styleActiveLine: true,
  autoCloseBrackets: true,
  //keyMap: "vim",
  theme: "material-darker",
  mode: "text/typescript",
});
// display write code in the console
editor.on("change", function () {
  document.getElementById("code").value = editor.getValue();
});
editor.setSize("100%", "100%");
var input = document.getElementById("select");
function selectTheme() {
  var theme = input.options[input.selectedIndex].textContent;
  editor.setOption("theme", theme);
  location.hash = "#" + theme;
}
var choice =
  (location.hash && location.hash.slice(1)) ||
  (document.location.search &&
    decodeURIComponent(document.location.search.slice(1)));
if (choice) {
  input.value = choice;
  editor.setOption("theme", choice);
}

CodeMirror.on(window, "hashchange", function () {
  var theme = location.hash.slice(1);
  if (theme) {
    input.value = theme;
    selectTheme();
  }
});

// vim mode
var commandDisplay = document.getElementById("command-display");
var keys = "";
CodeMirror.on(editor, "vim-keypress", function (key) {
  keys = keys + key;
  commandDisplay.innerText = keys;
});
CodeMirror.on(editor, "vim-command-done", function (e) {
  keys = "";
  commandDisplay.innerHTML = keys;
});
var vimMode = document.getElementById("vim-mode");
CodeMirror.on(editor, "vim-mode-change", function (e) {
  vimMode.innerText = JSON.stringify(e);
});
