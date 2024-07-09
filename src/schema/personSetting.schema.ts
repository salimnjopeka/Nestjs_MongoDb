import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class PersonSetting{
    @Prop()
    receiveNotification?: boolean;

    @Prop()
    receiveEmail?: boolean;

    @Prop()
    receiveSMS?: boolean;
}

export const PersonSettingSchema = SchemaFactory.createForClass(PersonSetting);