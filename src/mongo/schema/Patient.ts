import { model, Schema } from 'mongoose';
import { Patient } from '../../utils/interface';

const patientSchema = new Schema<Patient>({
	gender: { type: String, required: true },
	language: { type: String, required: true },
	age: { type: Number, required: true },
	surgeryName: { type: String, required: true },
});

const PatientModel = model<Patient>('Patient', patientSchema);

export default PatientModel;
