import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({timestamps: true})
export class Product{
    @Prop()
    nameProduct:string;

    @Prop()
    description:string;

    @Prop()
    price:number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);