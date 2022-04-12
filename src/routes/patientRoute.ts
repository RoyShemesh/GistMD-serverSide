import express from 'express';
import { ErrorMissingInfo } from '../utils/errorClass';
import { addPatient, deletePatient } from '../mongo/controllers/patientController';
import PatientModel from '../mongo/schema/Patient';
const router = express.Router();

router.get('/getAll', async (req, res, next) => {
	try {
		const partients = await PatientModel.find({});
		res.send(partients);
	} catch (error) {
		next(error);
	}
});

router.put('/newPatient', async (req, res, next) => {
	try {
		const { age, language, surgeryName, gender } = req.body;
		if (!age || !language || !surgeryName || !gender) throw new ErrorMissingInfo();
		const newExpense = await addPatient(gender, language, age, surgeryName);
		res.send(newExpense);
	} catch (error) {
		next(error);
	}
});

router.delete('/', async (req, res, next) => {
	try {
		const { patientId } = req.body;
		if (!patientId) throw new ErrorMissingInfo();
		await deletePatient(patientId);
		res.sendStatus(204);
	} catch (error) {
		next(error);
	}
});
export default router;
