import { User } from '../models/user.model.js'

export const getAllUsers = async (req, res) => {
    const users = await User.findAll()
    res.send(users)
}

export const getOneUser = async (req, res) => {
    const { id } = req.params
    const user = await User.findByPk(id)
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.send({ message: 'User found', user: user })
}

export const createUser = async (req, res) => {
  try {
    const { first_name, last_name, email, password, birthday, image_url } = req.body

    // Si no se envía image_url, genera uno con UI Avatars / A UI Avatars image is generated if image_url is ommited
    const avatar = image_url || `https://ui-avatars.com/api/?name=${first_name}+${last_name}`

    const user = await User.create({ first_name, last_name, email, password, birthday, image_url: avatar })
    res.status(201).json({ message: 'User created', user })
  } catch (error) {
    console.error('Error creating user:', error)
    res.status(500).json({ message: 'Error creating user', error: error.message })
  }
}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { first_name, last_name, email, password, birthday, image_url } = req.body

    const user = await User.findByPk(id)
    if (!user) return res.status(404).json({ message: 'User not found' })

    // Si no se envía image_url, genera uno nuevo con UI Avatars / A UI Avatars image is generated if image_url is ommited
    const avatar = image_url || `https://ui-avatars.com/api/?name=${first_name}+${last_name}`

    const updatedUser = await user.update({
      first_name,
      last_name,
      email,
      password,
      birthday,
      image_url: avatar
    })

    res.json({ message: 'User updated', user: updatedUser })
  } catch (error) {
    console.error('Error updating user:', error)
    res.status(500).json({ message: 'Error updating user', error: error.message })
  }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params
    await User.destroy({ where: { id }})
    res.send({ message: 'User deleted' })
}