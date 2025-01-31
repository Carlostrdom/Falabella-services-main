import express from "express";
import "dotenv/config.js";
import "./config/database.js";
import cors from "cors";
import morgan from "morgan";
import indexProducts from "./src/router/index.js";
import not_found_handler from "./middlewares/not_found_handler.js";
import error_handler from "./middlewares/error_handler.js";
import notFoundHandler from "./middlewares/error.405.js";

const server = express();
const PORT = process.env.PORT_PRODUCT || 8080;

const ready = () => console.log(`Server listening in port ${PORT}`);



server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use(morgan('dev'))

//router
server.use('/api', indexProducts)

server.use(not_found_handler)
server.use(notFoundHandler)
server.use(error_handler)


server.listen(PORT, ready);


