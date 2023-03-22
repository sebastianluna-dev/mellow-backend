export const verifyData = (req, res, next) => {
  const { name, age } = req.body 

  if (name === undefined || age === undefined) {
    res.status(400).json({ message: "You must have a name and an age" })
    return
  }
  if (typeof name !== "string") {
    res.status(400).json({ message: "Name must be an string" })
    return
  }
  if (typeof age !== "number") {
    res.status(400).json({ message: "age must be an number" })
    return
  }
  next()
}