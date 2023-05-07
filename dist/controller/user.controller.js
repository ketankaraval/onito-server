"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.addUser = void 0;
const user_model_1 = require("../model/user.model");
const addUser = (req, res) => {
    const newUser = new user_model_1.userModel(req.body);
    newUser.save((err, _category) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send("category added");
        }
    });
};
exports.addUser = addUser;
const getUsers = (_req, res) => {
    user_model_1.userModel.find({}, (err, users) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(users);
        }
    });
};
exports.getUsers = getUsers;
