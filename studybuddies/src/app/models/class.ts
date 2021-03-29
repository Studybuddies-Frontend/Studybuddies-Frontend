export interface Room {
    _id?: string,
    id_user: string,
    description : string,
    university : string,
    degree : string,
    subject : string,
    starting_time : Date,
    ending_time : Date,
    iTime: Date,
    fTime: Date,
    date : Date,
    price_per_hour? : Number,
    is_private? : boolean   
}
