import { Module } from '@nestjs/common'
import { PeopleModule } from './people/people.module'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    ConfigModule.forRoot(),
    PeopleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
