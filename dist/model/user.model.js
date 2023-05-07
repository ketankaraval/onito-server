"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: "category" },
    name: { type: String, required: true, unique: true },
    moisture: String,
    protien: String,
    fat: String,
    minerals: String,
    crudeFibre: String,
    carboHydrates: String,
    energy: String,
    calcium: String,
    phosphorus: String,
    iron: String,
});
exports.userModel = (0, mongoose_1.model)("item", userSchema);
