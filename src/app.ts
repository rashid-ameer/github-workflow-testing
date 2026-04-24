import express from "express";

const app = express();

app.get("/health", (_, res) => {
  res.status(200).json({ status: "ok", message: "updated version" });
});

export default app;
