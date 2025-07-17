// const express = require('express');
import express from "express";
// const dotenv = require("dotenv")
import dotenv from "dotenv";
import restaurantRouter from "./routers/restaurant.router.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello Nodemon");
});

// use router
app.use("/api/v1/restaurant", restaurantRouter);

app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
});
