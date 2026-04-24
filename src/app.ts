import express from "express";

const app = express();

app.get("/health", (_, res) => {
  res.status(200).json({ message: "Health is 100%" });
});

export default app;
