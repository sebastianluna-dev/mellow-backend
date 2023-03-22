import { faker } from "@faker-js/faker"

const createRandomAge = (min, max) => Math.ceil((Math.random() * max ) + min)

const createFakeUsers = (quantity) => {
  const users = []
  for (let i = 0 ; i < quantity ; i++) {
    users.push({
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      age: createRandomAge(18, 54)
    })
  }
  return users
}

const users = createFakeUsers(10)

export { users } 


