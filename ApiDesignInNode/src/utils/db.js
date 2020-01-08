<<<<<<< HEAD
import { connect } from 'mongoose'

const cosmosdbConnectionString = "mongodb://cosmosmongoos:oWfFTRkceQA5bR689h6SVTyWCRFNXM3sTRgyE6z5xtZhP4ltZlenu6zkKBdnjuf7UcLMzzgGOGa9NBRT9Rai3A==@cosmosmongoos.documents.azure.com:10255/?ssl=true&replicaSet=globaldb"
const dockerdbConnectionString = "mongodb://10.0.75.0:1993/Todos"
const cosmosdbmongoos = "mongodb://cosmosmongoos:oWfFTRkceQA5bR689h6SVTyWCRFNXM3sTRgyE6z5xtZhP4ltZlenu6zkKBdnjuf7UcLMzzgGOGa9NBRT9Rai3A==@cosmosmongoos.documents.azure.com:10255/Todos?ssl=true&replicaSet=globaldb"
export const dbconnection = (url = "mongodb://mongo/Todos", options) => {
    return connect(
        url,
        { ...options, useNewUrlParser: true }
    )
}

function somefun() {

=======
import { connect } from 'mongoose'

const cosmosdbConnectionString = "mongodb://localhost:C2y6yDjf5%2FR%2Bob0N8A7Cgv30VRDJIWEHLM%2B4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw%2FJw%3D%3D@localhost:10255/admin?ssl=true"
const cosmosAzureConnectionString = "mongodb://cosmosmongoos:oWfFTRkceQA5bR689h6SVTyWCRFNXM3sTRgyE6z5xtZhP4ltZlenu6zkKBdnjuf7UcLMzzgGOGa9NBRT9Rai3A==@cosmosmongoos.documents.azure.com:10255/Todos?ssl=true&replicaSet=globaldb"
const dockerdbConnectionString = "mongodb://localhost:1993/Todos"
export const dbconnection = (url = dockerdbConnectionString, options) => {
    return connect(
        url,
        { ...options, useNewUrlParser: true }
    )
}

function somefun() {

>>>>>>> e9ecc3d1a9c063805141e727ec110d39f149d0b2
}