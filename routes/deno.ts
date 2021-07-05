import { Router } from "express";
import axios from "axios";

const router = Router();

router.post("/code", async (req, res) => {
  const { code } = req.body;
  console.log(code);

  axios
    .post("https://api-deno-compiler.herokuapp.com/code", {
      code: code,
    })
    .then((r) => {
      console.log(r.data.out);
      res.json({ out: r.data.out });
    }).catch((err) => err ? res.json({ out: "to many requests" }) : null);
});

module.exports = router;
