import express from 'express';
import { ErrorMissingInfo } from '../utils/errorClass';
import { addPatient } from '../mongo/controllers/patientController';
const router = express.Router();

router.get('/newPatient', async (req, res, next) => {
	try {
		const { age, language, surgeryName, gender } = req.body;
		if (!age || !language || !surgeryName || !gender) throw new ErrorMissingInfo();
		const newExpense = await addPatient(age, language, surgeryName, gender);
		res.send(newExpense);
	} catch (error) {
		next(error);
	}
});
export default router;
