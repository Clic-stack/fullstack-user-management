import dotenv from 'dotenv';
dotenv.config();

import app from './app.js'
import sequelize from './db/connect.js'

const startServer = async () => {
    try {
        console.log('Establishing a database connection...')
        await sequelize.authenticate()
        await sequelize.sync({ force: false })
        console.log('Database connection successful')

        console.log('The server is initializing')
        app.listen(app.get('port'), () => {
            console.log(`Server runs in port http://localhost:${app.get('port')}`)
        })
    } catch (error) {
        console.log('Ooops something was wrong', error)
        process.exit(1)
    }
}

startServer()