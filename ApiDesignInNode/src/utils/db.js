import { connect } from 'mongoose'

const cosmosdbConnectionString = "mongodb://localhost:C2y6yDjf5%2FR%2Bob0N8A7Cgv30VRDJIWEHLM%2B4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw%2FJw%3D%3D@localhost:10255/admin?ssl=true"
const cosmosAzureConnectionString = "mongodb://cosmosmongoos:oWfFTRkceQA5bR689h6SVTyWCRFNXM3sTRgyE6z5xtZhP4ltZlenu6zkKBdnjuf7UcLMzzgGOGa9NBRT9Rai3A==@cosmosmongoos.documents.azure.com:10255/Todos?ssl=true&replicaSet=globaldb"
const dockerdbConnectionString = "mongodb://localhost:1993/Todos"
export const dbconnection = (url = cosmosAzureConnectionString, options) => {
    return connect(
        url,
        { ...options, useNewUrlParser: true }
    )
}