import { db } from "../database/database";

function getPerson() {
  return db.query(`
    SELECT * FROM people
  `);
}

const peopleRepository = {
  getPerson
}

export default peopleRepository;