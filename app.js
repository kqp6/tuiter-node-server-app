import express from 'express';
import cors from 'cors';
import HelloController
  from "./controllers/hello-controller.js";
import UserController
  from "./controllers/users/users-controller.js";
import TuitsController
  from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

// const CONNECTION_STRING = `${process.env.DB_CONNECTION_STRING}/test` 
// mongoose.connect(CONNECTION_STRING);
mongoose.connect('mongodb+srv://kqp3:Eric199815101688109@cluster0.hypzqfc.mongodb.net/?retryWrites=true&w=majority');

const app = express();
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);
