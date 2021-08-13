import { Module } from '@nestjs/common'
import { PeopleService } from './people.service'
import { PeopleResolver } from './people.resolver'

@Module({
  providers: [PeopleResolver, PeopleService],
})
export class PeopleModule {}
