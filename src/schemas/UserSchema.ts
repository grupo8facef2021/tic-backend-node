import UserEntity from "src/entities/UserEntity";

class UserSchema{
    id: string
    email: string
    level: number
    status: number

    constructor(params: UserEntity){
        console.log(params)
        this.id = params.id
        this.email = params.email
        this.level = params.level
        this.status = params.status
    }
}

export default UserSchema