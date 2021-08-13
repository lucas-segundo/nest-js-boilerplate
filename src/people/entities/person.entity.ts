import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Person {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
