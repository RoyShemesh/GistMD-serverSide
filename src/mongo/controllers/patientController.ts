import validator from 'validator';
import { ErrorForbiddenRequest, ErrorInvalidVariable } from '../../utils/errorClass';
import PatientModel from '../schema/Patient';

export const addPatient = async (
	gender: string,
	language: string,
	age: string,
	surgeryName: string
) => {
	if (!validator.isNumeric(age.toString())) throw new ErrorInvalidVariable();
	if (gender !== 'Male' && gender !== 'Female') throw new ErrorInvalidVariable();
	if (language !== 'Hebrew' && language !== 'Arabic' && language !== 'English')
		throw new ErrorInvalidVariable();
	const newPatient = new PatientModel({ gender, language, age, surgeryName });
	await newPatient.save();
	return newPatient;
};

export const deletePatient = async (patientId: string) => {
	try {
		const data = await PatientModel.findById(patientId);
		await PatientModel.findByIdAndDelete(patientId);
	} catch (error) {
		throw new ErrorForbiddenRequest();
	}
};
