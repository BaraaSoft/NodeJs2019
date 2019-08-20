
let data = [{ name: 'baraa', job: 'developer', id: '007' },
{ name: 'mike', job: 'Dev ops', id: '012' },
{ name: 'John', job: 'QA Tester', id: '670' }]



const getAll = (req, res) => {
    res.send(data)
}

const getOne = (req, res) => {
    const { id } = req.params;
    const item = data.filter(x => x.id === id)
    res.send(item);
}

const updateOne = (req, res) => {
    const { id } = req.params;

    console.log()
    const index = data.map(x => x.id).indexOf(id);

    if (index == -1) return res.send(data)
    data.splice(index, index + 1)
    data = [...data, req.body]
    res.send(data)
}


const createOne = (req, res) => {
    const item = req.body;
    data = [...data, item]
    res.send(item)
}



const deleteOne = (req, res) => {
    const index = data.map(x => x.id).indexOf(id)
    data = data.splice(index, index)
    res.send(data)
}


export {
    getOne,
    updateOne,
    createOne,
    deleteOne,
    getAll
}