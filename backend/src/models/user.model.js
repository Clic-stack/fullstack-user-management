import { DataTypes } from 'sequelize'
import db from '../db/connect.js'

export const User = db.define('users', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull:true,
    }
})