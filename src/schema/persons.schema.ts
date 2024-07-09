import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({timestamps: true})
export class Persons{
    @Prop({required: true})
    name: string;

    @Prop()
    age: number;

    @Prop()
    gender: string;
}

export const PersonSchema = SchemaFactory.createForClass(Persons);
