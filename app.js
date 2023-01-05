/*1. Create a Node js Express application that has the following features
•	A middleware that checks for request header ‘auth’ . If this header and its value is absent send a response like this
{ “Error” : {“errcode ”:”401 - Unauthorized access”,”errormessage”:”Login to access the requested resource” }}
•	set the response status code as 401
•	set up a web api for the url endpoint as /getNumber which returns your phonenumber. This request should be served irrespective of the presence of auth header. You may hard code your phone number
•	set up a web api for the url endpoint as /getName which returns your name. This request should not be served if auth header is absent. You may hard code your name
.
*/
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
//app.use(express.json());

app.get("/", (req, res) => {});

app.get("/getNumber", (req, res) => {
  res.send("Phone number: 7030488952");
});

//app.use(login)
app.get("/getName", login, (req, res) => {
  res.send("Name: PRAJWAL");
});

function login(req, res, next) {
  const authpresent = req.headers["auth"];
  if (authpresent) {
    console.log("Auth and it's value is present in request header");
    next();
  } else {
    console.log("Auth header is absent");
    res.status(401).json({
      Errorcode: "401 - Unauthorized access",
      Errormessage: "Login to access the requested resource",
    });
  }
}

app.listen(4000, () => console.log("Server started on port 4000"));
