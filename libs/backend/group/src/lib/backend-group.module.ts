import { Module } from '@nestjs/common'
import { BackendGroupService } from './service/backend-group.service'

@Module({
  controllers: [],
  providers: [BackendGroupService],
  exports: [BackendGroupService],
})
export class BackendGroupModule {}
