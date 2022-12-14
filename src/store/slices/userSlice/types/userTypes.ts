export interface User {
    phone: string,
    name: string,
    nickname: string,
    email: string,
    position: string,
    photo: string
}

export interface UserSchema {
    data: User[],
    users: User[]
}
