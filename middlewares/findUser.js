import { UsersDAO } from "../services/users.service.js"

export const findUser = (req, res, next) => {
  const id = req.params.id
  const user = UsersDAO.getUser(id)
  if (!user) {
    res.status(404).json({
      message: "There is not any user with that id"
    })
  } else {
    next()
  }
}