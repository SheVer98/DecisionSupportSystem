import { Schema, model } from "mongoose";


export interface Car{
    id:string;
    model:string;
    cena:number;
    moc:number;
    pojemnosc:number;
    przebieg:number;
    rok:number;
    paliwo:string;
    skrzynia:string;
    link:string;
}


export const CarSchema= new Schema<Car>(
    {
        model: {type:String, required:true},
        cena: {type:Number, required:true},
        moc: {type:Number, required:true},
        pojemnosc: {type:Number, required:true},
        przebieg: {type:Number, required:true},
        rok: {type:Number, required:true},
        paliwo: {type:String, required:true},
        skrzynia: {type:String, required:true},
        link: {type:String, required:true},
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
);

export const CarModel= model<Car>('car',CarSchema);