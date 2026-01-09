import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connection } from "./database/connection.js";
import { errorMiddleware } from './middlewares/error.js';
import fileUpload from 'express-fileupload';
import userRouter from './routers/userRouter.js';
import jobRouter from './routers/jobRouter.js';
import applicationRouter from './routers/applicationRouter.js';
import { newsLetterCron } from './automation/newsLetterCron.js';

const app = express();
config({path : "./config/config.env"});

app.use(cors({
     origin: [
    "http://localhost:5173",
<<<<<<< HEAD
    "https://project-job-portal-frontend.onrender.com",
=======
    "https://project-job-portal-frontend.onrender.com/",
>>>>>>> ebc50e88eadd431cc74daea43888d993944eff75
  ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
})
);
 
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(          // file upload middleware (to get flles from req)
    fileUpload({
        useTempFiles : true,
        tempFileDir : "/tmp/",
    })
);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);

newsLetterCron();
connection();
app.use(errorMiddleware);

export default app;
