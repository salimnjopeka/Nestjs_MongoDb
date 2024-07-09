import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from 'src/schema/post.schema';
import { PersonSchema, Persons } from 'src/schema/persons.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Post.name, 
      schema:PostSchema
    },
    {
      name: Persons.name,
      schema: PersonSchema
    }
  ])
],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
