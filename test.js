const fs = require('fs')

//读取users数据
//先fs.readFileSync('./db/users.json').toString()，然后JSON.parse反序列化
const usersString = fs.readFileSync('./db/users.json').toString()
const usersArray = JSON.parse(usersString)

//存储users数据
//先JSON.stringify序列化，得到字符串，然后fs.writeFileSync('./db/users.json',string)
const users = {id:3,name:'tom',password:'yyy'}
usersArray.push(users)
const string = JSON.stringify(usersArray)
fs.writeFileSync('./db/users.json',string) 
