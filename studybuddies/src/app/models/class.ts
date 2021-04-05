export class Class {
    constructor(guid='', description='', university='', degree='',subject='', starting_time= '', ending_time='', iTime = new Date, fTime = new Date,
                date = new Date,price_per_hour=0, is_private=false, authorised_users=[], id_user=0, room_url=''){
        this.guid = guid;
        this.description = description;
        this.university = university;
        this.degree = degree;
        this.subject = subject;
        this.starting_time = starting_time;
        this.ending_time = ending_time;
        this.price_per_hour = price_per_hour;
        this.is_private = is_private;
        this.authorised_users = authorised_users;
        this.id_user = id_user;
        this.room_url = room_url;
        this.date = date;
        this.iTime = iTime;
        this.fTime = fTime;
    }
    guid: string;
    description: string;
    university: string;
    degree: string;
    subject: string;
    starting_time: string;
    ending_time: string;
    price_per_hour: number;
    is_private: boolean;
    authorised_users: Array<number>;
    id_user: number;
    room_url: string;
    date: Date;
    iTime: Date;
    fTime: Date;
}
