import { UserModel } from './user.model';

export class PostModel {
    id: string;
    user: UserModel;
    title: string;
    text: string;
    category: string;
    image: string;
    time: string;

}