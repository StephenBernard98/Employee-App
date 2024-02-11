import { Document, Schema, models, model } from "mongoose";

export interface IStaffFile extends Document {
  _id: string;
  title: string;
  origin?: string;
  address?: string;
  dateOfBirth: Date;
  imageUrl: string;
  gender: string;
  startDate: Date;
  salary: string;
  nin: string;
  bvn: string;
  phoneNumber: string;
  department?: string;
}

const StaffFileSchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  origin: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: Date, default: Date.now, required: true },
  imageUrl: { type: String, required: true },
  startDate: { type: Date, default: Date.now, required: true },
  salary: { type: String, required: true },
  nin: { type: String, required: true },
  bvn: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  department: { type: String },
});

const StaffFile = models.StaffFile || model("StaffFile", StaffFileSchema);

export default StaffFile;

