import bcrypt from "bcryptjs"
const userData = [{
    name:"Manik",
    password:bcrypt.hashSync("Manik111",10),
    email:"manikdhanjal217@gmail.com",
    isAdmin:true,
},{
    name:"john wick",
    password:bcrypt.hashSync("john",10),
    email:"john@gmail.com",
},{
    name:"ryan reynolds",
    password:bcrypt.hashSync("ryan",10),
    email:"ryan@gmail.com",
}]

export default userData