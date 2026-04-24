import express from "express";

const app = express();

app.get("/health", (_, res) => {
  res.status(200).json({ message: "Status is healthy" });
});

export default app;
