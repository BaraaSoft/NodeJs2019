

const createNew = (req, res) => {
    res.send({ data: 'created!' })
}


const update = (req, res) => {
    res.send({ data: 'updated!' })
}

const deleteOne = (req, res) => {
    res.send({ data: 'deleted!' })
}

const fetchAll = (req, res) => {
    res.send({ data: 'fetch all' })
}

const fetchOne = (req, res) => {
    res.send({ data: 'fetch One' })
}


export default {
    createNew,
    update,
    deleteOne,
    fetchAll,
    fetchOne
}