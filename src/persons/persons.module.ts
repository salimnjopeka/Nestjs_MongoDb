import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { PersonSchema, Persons } from 'src/schema/persons.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: Persons.name, schema: PersonSchema}])],
  controllers: [PersonsController],
  providers: [PersonsService],
})
export class PersonsModule {}
