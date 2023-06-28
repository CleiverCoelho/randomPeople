import httpStatus from "http-status";
import { Request, Response } from "express";
import peopleService from "../services/people-service";
import { Person } from "protocols/person-protocol";

async function getPerson(req : Request, res: Response)  {

  try {
    const person : Person = await peopleService.getPerson();
    res.send(person);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

const peopleController = {
  getPerson
}

export default peopleController;