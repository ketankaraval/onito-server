import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  age: Number,
  gender: String,
  mobileNo: Number,
  govtIssuedId: String,
  guardianDetails: String,
  email: String,
  emergencyContactNumber: Number,
  address: String,
  state: String,
  city: String,
  country: String,
  pincode: Number,
  occupation: String,
  religion: String,
  maritalStatus: String,
  bloodGroup: String,
  nationality: String,
});
export const userModel = model("item", userSchema);
