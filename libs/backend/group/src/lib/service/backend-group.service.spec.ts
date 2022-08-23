import { Test } from '@nestjs/testing'
import { BackendGroupService } from './backend-group.service'

describe('BackendGroupService', () => {
  let service: BackendGroupService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendGroupService],
    }).compile()

    service = module.get(BackendGroupService)
  })

  it('should be defined', () => {
    expect(service).toBeTruthy()
  })
})
