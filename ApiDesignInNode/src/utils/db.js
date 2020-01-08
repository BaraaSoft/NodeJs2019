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

}