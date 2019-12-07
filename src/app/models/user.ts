export class User {
    id: number;
    email: string;
    sex: number;
    name: string;
    firstname: string;
    wallet: number;
    isLunchLady: boolean;
    address: string;
    image: string;

    constructor(email) {
        this.email = email;
    }

}
