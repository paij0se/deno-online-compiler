import { Router, json } from "express";
import { exec } from "child_process";
import { writeFile } from "fs";
import Convert =require( "ansi-to-html");
const router = Router();
const deno = "deno run --allow-net --no-check  execute.ts";
const convert = new Convert();
const regex =
  /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
router.post("/code", (req, res) => {
  const { code } = req.body;
  console.log(code);

  writeFile("execute.ts", code, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  exec(deno, { timeout: 1000 }, (_, stdout, stderr) => {
    let out = convert.toHtml((stdout || stderr).replace(regex, ""));
    console.log(out);
    res.json({
      out: out,
    });
  });
});

module.exports = router;
