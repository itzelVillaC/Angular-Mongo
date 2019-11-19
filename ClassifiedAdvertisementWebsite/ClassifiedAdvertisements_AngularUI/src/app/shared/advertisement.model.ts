import { UserModel } from './user.model';

export class AdvertisementModel {
    id: string;
    user: UserModel;
    title: string;
    text: string;
    category: string;
    image: string;
    time: string;

}