import express, { Request } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Mongoose from 'mongoose';
import { MONGODB_URI } from './utils/config';
import patientRouter from './routes/patientRoute';
import errorHandler from './middleware/errorHandler';
const app = express();
app.use(express.json());
morgan.token('body', (req: Request) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

Mongoose.connect(MONGODB_URI as string)
	.then(() => {
		console.log('connected to monogodb');
	})
	.catch(() => {
		console.log('error occured connecting to MONGODB');
	});

app.use('/patients', patientRouter);
app.use(errorHandler);

export default app;
