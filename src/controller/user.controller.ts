import { Request, Response } from "express";
import { userModel } from "../model/user.model";

export const addUser = (req: Request, res: Response) => {
  const newUser = new userModel(req.body);
  newUser.save((err: any, _user: any) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send("user added");
    }
  });
};

export const getUsers = (_req: Request, res: Response) => {
  userModel.find({}, (err: any, users: any) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(users);
    }
  });
};
