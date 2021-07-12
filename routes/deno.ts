import { Router } from "express";
import axios from "axios";

const router = Router();

router.post("/code", async (req, res) => {
  const { code } = req.body;
  console.log(`input: ${code}`);

  axios
    .post("https://api-deno-compiler.herokuapp.com/code", {
      code: code,
    })
    .then((r) => {
      if (r.data === "") {
        res.json({ out: "Api response with a empty output" });
      } else {
        console.log(`output: ${r.data}`);
        res.json({ out: r.data });
      }
    }).catch((err) => err ? res.json({ out: "to many requests" }) : null);
});

module.exports = router;
