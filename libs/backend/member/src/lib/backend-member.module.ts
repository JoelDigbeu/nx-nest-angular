import { Module } from '@nestjs/common'
import { BackendMemberService } from './service/backend-member.service'

@Module({
  controllers: [],
  providers: [BackendMemberService],
  exports: [BackendMemberService],
})
export class BackendMemberModule {}
