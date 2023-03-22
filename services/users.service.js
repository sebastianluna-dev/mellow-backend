import { users } from "../db/Users.js"
import { faker } from "@faker-js/faker"

class Users {
  constructor(db) {
    this.users = db
  }
  getUser(id) {
    const user = this.users.find(user => user.id === id)
    return user 
  }
  getUsers(quantity) {
    if (!quantity) {
      return this.users
    }
    return this.users.slice(1, quantity)
  }
  createUser(name, age) {
    const id = faker.datatype.uuid()
    const newUser = { name, age, id }
    this.users.push(newUser)
    return newUser
  }
  editUser(id, name, age) {
    const userIndex = this.users.findIndex(user => user.id === id)
    const updatedUser = { id, name, age }
    this.users[userIndex] = updatedUser
    return updatedUser
  }
  deleteUser(id) {
    const deletedUser = this.users.find(user => user.id === id)
    const filteredArray = this.users.filter(user => user.id !== id)
    this.users = filteredArray
    return deletedUser
  }
}

const UsersDAO = new Users(users)
export { UsersDAO }