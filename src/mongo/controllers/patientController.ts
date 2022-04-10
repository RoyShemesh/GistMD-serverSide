import validator from 'validator';
import { ErrorInvalidVariable } from '../../utils/errorClass';
import PatientModel from '../schema/Patient';

export const addPatient = async (
	gender: string,
	language: string,
	age: string,
	surgeryName: string
) => {
	if (!validator.isNumeric(age.toString())) throw new ErrorInvalidVariable();
	if (gender !== 'Male' && gender !== 'Female') throw new ErrorInvalidVariable();
	if (language !== 'Hebrew' && language !== 'Arabic' && language !== 'Engilsh')
		throw new ErrorInvalidVariable();
	const newPatient = new PatientModel({ gender, language, age, surgeryName });
	await newPatient.save();
	return newPatient;
};
