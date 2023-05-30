import { Module } from '@nestjs/common';
import { RulesResolver } from './rules.resolver';

@Module({
  providers: [RulesResolver],
})
export class RulesModule {}
