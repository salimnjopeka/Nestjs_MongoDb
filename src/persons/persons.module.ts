import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { PersonSchema, Persons } from 'src/schema/persons.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonSetting, PersonSettingSchema } from 'src/schema/personSetting.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Persons.name, 
      schema: PersonSchema
    },
    {
      name: PersonSetting.name,
      schema: PersonSettingSchema
    }
  ])],
  controllers: [PersonsController],
  providers: [PersonsService],
})
export class PersonsModule {}
