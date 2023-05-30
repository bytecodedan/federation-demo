import {
  ApolloDriver,
  ApolloDriverConfig,
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DateResolver, JSONResolver } from 'graphql-scalars';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RulesModule } from './rules/rules.module';
import { RulesResolver } from './rules/rules.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      playground: true,
      // https://docs.nestjs.com/graphql/quick-start#schema-first
      typePaths: ['./**/typeDefs.gql'], // ./**/typeDefs.gql
      resolvers: {
        Date: DateResolver,
        JSON: JSONResolver,
      },
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        // outputAs: 'class',
      },
    }),
    RulesModule,
  ],
  controllers: [AppController],
  providers: [AppService, RulesResolver],
})
export class AppModule {}
