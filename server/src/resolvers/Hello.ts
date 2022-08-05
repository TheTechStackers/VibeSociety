// import { query } from 'express';
import { Query, Resolver } from 'type-graphql';
//import { PrismaClient } from '@prisma/client';

//const prisma = new PrismaClient();

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello() {
    return 'hello world';
  }
}
