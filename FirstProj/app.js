const { ListDir, ListDirPromise } = require('./ListDir')


const listDir = ListDirPromise('./')
listDir.Directories()
listDir.on('onFileLog', console.log)


