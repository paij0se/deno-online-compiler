import { exec } from "child_process";
import { Router } from "express";

const router = Router();

router.get("/status", async (_, res) => {
  exec("./routes/status", (_, stdout, stderr) => {
    let out: String = (stdout || stderr);
    res.json({ out: out });
  });
});

module.exports = router;
