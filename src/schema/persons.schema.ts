import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose from "mongoose";
import { PersonSetting } from "./personSetting.schema";
import { Post } from "./post.schema";

@Schema({timestamps: true})
export class Persons{
    @Prop({required: true})
    name: string;

    @Prop()
    age: number;

    @Prop()
    gender: string;

    @Prop({type: mongoose.Types.ObjectId, ref: 'PersonSetting'})
    settings?: PersonSetting;

    @Prop({type: [{type: mongoose.Types.ObjectId, ref: 'Post'}]})
    post: Post[];
}

export const PersonSchema = SchemaFactory.createForClass(Persons);
