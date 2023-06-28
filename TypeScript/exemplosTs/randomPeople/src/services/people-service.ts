import peopleRepository from "../repositories/people-repository";
import { Person } from "protocols/person-protocol";

async function getPerson() {

  const people = await peopleRepository.getPerson();
  const peopleArr : Array <Person> = people.rows;
  const peopleCount : number = people.rowCount;
  const randomPosition : number = (Math.floor((Math.random() * (peopleCount))));

  return peopleArr[randomPosition];
}

const peopleService = {
  getPerson
}

export default peopleService;