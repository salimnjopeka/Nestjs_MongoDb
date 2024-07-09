import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import mongoose from 'mongoose';

@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Post('/createPerson')
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personsService.create(createPersonDto);
  }

  @Get('/readPersons')
  findAll() {
    return this.personsService.findAll();
  }

  @Get('/readSinglePerson/:id')
  async findOne(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const findPerson = await this.personsService.findOne(id);
    if(!findPerson) throw new HttpException('Person not found', 404);
    return findPerson;
  }

  @Patch('/updatePerson/:id')
  async update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const updatedPerson = await this.personsService.update(id, updatePersonDto);
    if(!updatedPerson) throw new HttpException('Person not found', 404);
    return updatedPerson;
  }

  @Delete('/deletePerson/:id')
  async remove(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const deletedPerson = await this.personsService.remove(id);
    if(!deletedPerson) throw new HttpException('Person not found', 404);
    return deletedPerson;
  }
}
