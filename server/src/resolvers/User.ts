import { Arg, Field, InputType, Mutation, Resolver } from 'type-graphql';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@InputType
class EventInputType {
  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;
}

@Resolver()
export class EventResolver {
  @Mutation(() => String)
  async createEvent(
    @Arg('newEvent', () => EventInputType)
    newEvent: EventInputType
  ) {
    const { title, content } = newEvent;
    const event = await prisma.event.create({
      data: {
        title,
        content,
        authorId:
      },
    });
  }
}
