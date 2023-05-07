"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
exports.userModel = (0, mongoose_1.model)("item", userSchema);
