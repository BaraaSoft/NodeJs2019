const EventEmitter = require('events');
const fs = require('fs')

const ListDir = (path) => {
    const lister = Object.create(EventEmitter.prototype);
    fs.promises.readdir(path, { withFileTypes: true })
        .then((dirItem) => {
            dirItem.forEach(item => {
                const fileType = {
                    name: item.name,
                    fsLevel: item.isDirectory() ? 1 : 0,
                }
                lister.emit('onFileLog', fileType)
            })
        })
    return lister
}

const ListDirPromise = (path) => {
    function lister() { EventEmitter.call(this) }
    lister.prototype = Object.create(EventEmitter.prototype)
    lister.prototype.constructor = lister;

    const eventBus = new lister()

    lister.prototype.Directories = () => new Promise((resolve, reject) => {
        fs.promises.readdir(path, { withFileTypes: true })
            .then((dirItems) => {
                const dirType = dirItems.map(x => ({
                    name: x.name,
                    fsLevel: x.isDirectory() ? 1 : 0,
                }))
                dirType.forEach(dirOrFile => eventBus.emit('onFileLog', dirOrFile))
                resolve(dirType)
            })
    })
    return eventBus;
}



module.exports = {
    ListDir,
    ListDirPromise
}
//brew services start mongodb