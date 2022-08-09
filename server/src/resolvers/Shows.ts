import { Query, Resolver } from 'type-graphql';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient()

@Resolver()
export class ShowsResolver {
  @Query(() => String)
  getShowName() {
    return 'hello world';
  }
}
