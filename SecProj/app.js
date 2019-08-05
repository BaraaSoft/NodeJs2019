import { ListDir, ListDirPromise } from './ListDir'


const listDir = ListDirPromise('./')
listDir.Directories()
listDir.on('onFileLog', console.log)
console.log("ddd")


