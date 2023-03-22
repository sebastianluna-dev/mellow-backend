import express from "express"
import { UsersDAO } from "../services/users.service.js"
import { findUser } from "../middlewares/findUser.js"
import { verifyData } from "../middlewares/verifyData.js"

const router = express.Router()

router.get("/", (req, res) => {
  const usersQuantity = parseFloat(req.query.usersQuantity) + 1
  const users = UsersDAO.getUsers(usersQuantity)
  res.status(200).json(users)
})

router.post("/", verifyData, (req, res) => {
  const { name, age } = req.body
  const newUser = UsersDAO.createUser(name, age)
  res.status(200).json(newUser)
}) 

router.put("/:id", verifyData, findUser, (req, res) => {
  const id = req.params.id
  const { name, age } = req.body
  const updatedUser = UsersDAO.editUser(id, name, age)
  res.status(200).json(updatedUser)
})

router.delete("/:id", findUser, (req, res) => {
  const id = req.params.id
  const deletedUser = UsersDAO.deleteUser(id)
  res.status(200).json(deletedUser)
})

export { router as routerUsers }