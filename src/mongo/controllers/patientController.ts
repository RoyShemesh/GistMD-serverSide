import ExpenseSchema from '../schema/Patient';
import validator from 'validator';
// import { ErrorInvalidVariable } from '../../utils/errorClass';

export const addPatient = async (
	gender: string,
	language: string,
	age: string,
	surgeryName: string
) => {
	if(!validator.isNumeric(age.t))
};
