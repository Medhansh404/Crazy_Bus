// server.js

import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
//import { urlencoded, json as _json } from "body-parser";
import passenger from "./model/Passenger.js";
require("dotenv").config();

const passport = require("passport");
const authRoute = require("./routes/auth");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passportGoogle");


const app = express();
const PORT = 3001;

app.use(express.json())
app.use(cors())

connect("mongodb://localhost:27017/passenger");

app.post('/login', (req, res) =>{
  passenger.create(req.body).then(passenger => res.json(passenger)).catch(err => req.json(err))
})



app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use("/auth", authRoute);

const port =  PORT || 8080;

//app.use(urlencoded({ extended: false }));
//app.use(_json());

/* API endpoint for searching buses
//app.get("/api/search", async (req, res) => {
  const { to, departureDate } = req.query;

  try {
    const buses = await Bus.find({
      destination: to,
      departureDate
    });

    res.json(buses);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
*/
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
