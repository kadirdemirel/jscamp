import User from "../models/user.js"
import UserService from "../services/userService.js"
import {BaseLogger, ElasticLogger} from "../crossCuttingConcerns/logging/logger.js"

console.log("User component loaded !")


let logger1=new ElasticLogger()
let userService =new UserService(logger1)

let user1=new User(1,"Kadir","Demirel","Mersin")
let user2=new User(2,"Kadir","Demirel","İzmir")

userService.add(user1)
userService.add(user2)
userService.getById(1)
userService.list()
console.log(userService.list())
console.log(userService.getById(2))


//JavaScript'te sonradan değer set edebiliriz ve buna prototyping denir.
let customer={id:1,firstName:"Kadir"}
//prototyping
customer.lastName="Demirel"

console.log(customer.lastName)