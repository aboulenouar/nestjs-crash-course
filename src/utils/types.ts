export type CreateUserParams = {
    username: string;
    email: string;
    password: string;
}

export type UpdateUserParams = {
    username: string;
    password: string;
    bio: string;
}

export type CreateProfileParams = {
    firstName: string;
    lastName: string;
    age: number;
}

export type CreatePostParams = {
    title: string;
    content: string;
}