import { connect } from 'mongoose'

const cosmosdbConnectionString = "mongodb://localhost:C2y6yDjf5%2FR%2Bob0N8A7Cgv30VRDJIWEHLM%2B4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw%2FJw%3D%3D@localhost:10255/admin?ssl=true"
const dockerdbConnectionString = "mongodb://localhost:1993/Todos"
export const dbconnection = (url = dockerdbConnectionString, options) => {
    return connect(
        url,
        { ...options, useNewUrlParser: true }
    )
}