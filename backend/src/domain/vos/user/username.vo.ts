export class UserNameVO{
    private constructor(private username: string){}

    static create(username: string){
        return new UserNameVO(username);
    }

    get value(): string{
        return this.username;
    }
}