const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/user");
const ContactModel = require("./models/contact");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
origin:"https://apple-classes.vercel.app",
  optionsSuccessStatus: 200,  
  methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
  credentials: true,
  preflightContinue: false,
}));

// Database connection
mongoose.connect("mongodb+srv://basantkumarweb:753dzH2WQKLGJKeC@db-apple.zk1gplu.mongodb.net/?retryWrites=true&w=majority&appName=db-apple/test").then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Routes
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.post("/contact", async (req, res) => {
  try {
    const contact = await ContactModel.create(req.body);
     res.setHeader("Access-Control-Allow-Origin", "https://apple-classes.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: "Failed to submit contact" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("Incorrect password");
      }
    } else {
      res.json("User not found");
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to login" });
  }
});

app.post("/sign", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    // Include CORS headers in the response
    res.setHeader("Access-Control-Allow-Origin", "https://apple-classes.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

