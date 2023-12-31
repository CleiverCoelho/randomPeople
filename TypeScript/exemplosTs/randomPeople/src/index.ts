import express from "express";

import dotenv from "dotenv";
dotenv.config();

import peopleRouter from "./routers/people-router";

const app  = express();
const port = process.env.PORT || 5000;

app.use(peopleRouter);


app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
})