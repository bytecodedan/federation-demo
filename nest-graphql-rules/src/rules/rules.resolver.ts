import { Args, Query, Resolver } from '@nestjs/graphql';
import { Rule } from 'src/graphql';

@Resolver('Rule')
export class RulesResolver {
  // Mock data
  data: Rule[] = [
    {
      id: '1',
      name: 'Rule number 1 name',
      description: 'description....',
      activated: true,
      createdBy: 'Dan Martin',
      filter: {
        and: [
          {
            or: [
              {
                in: [
                  {
                    var: 'make',
                  },
                  'Toyota',
                ],
              },
              {
                in: [
                  {
                    var: 'make',
                  },
                  'Honda',
                ],
              },
            ],
          },
        ],
      },
      action: { // We still need to figure out what 'action' should look like
        if: [
          {
            and: [
              { '<': [{ var: 'ListPrice' }, 10000] },
              { '==': [{ var: 'AgeInDays' }, 15] },
            ],
          },
          1.1,
          {
            and: [
              { '<': [{ var: 'ListPrice' }, 10000] },
              { '==': [{ var: 'AgeInDays' }, 20] },
            ],
          },
          1.09,
          {
            and: [
              { '<=': [{ var: 'ListPrice' }, 20000] },
              { '>': [{ var: 'ListPrice' }, 10000] },
              { '==': [{ var: 'AgeInDays' }, 15] },
            ],
          },
          1.05,
          {
            and: [
              { '<=': [{ var: 'ListPrice' }, 20000] },
              { '>': [{ var: 'ListPrice' }, 10000] },
              { '==': [{ var: 'AgeInDays' }, 20] },
            ],
          },
          1.04,
          {
            and: [
              { '<=': [{ var: 'ListPrice' }, 100000] },
              { '>': [{ var: 'ListPrice' }, 20000] },
              { '==': [{ var: 'AgeInDays' }, 15] },
            ],
          },
          0.99,
          {
            and: [
              { '<=': [{ var: 'ListPrice' }, 100000] },
              { '>': [{ var: 'ListPrice' }, 20000] },
              { '==': [{ var: 'AgeInDays' }, 20] },
            ],
          },
          0.98,
          1,
        ],
      },
      schedule: {
        startDate: new Date(),
        stopDate: new Date(),
      },
    },
    // {
    //   id: '2',
    //   name: 'Rule number 2 name',
    //   description: 'price > 10000',
    //   activated: true,
    //   createdBy: 'Dan Martin',
    //   filter: {},
    //   schedule: {
    //     startDate: new Date(),
    //     stopDate: new Date(),
    //   },
    // },
    // {
    //   id: '3',
    //   name: 'Rule number 3 name',
    //   description: 'price < 10000',
    //   createdBy: 'Dan Martin',
    //   activated: true,
    //   filter: { },
    //   schedule: {
    //     startDate: new Date(),
    //     stopDate: new Date(),
    //   },
    // },
  ];

  @Query()
  rules(): Rule[] {
    return this.data;
  }

  @Query()
  rule(@Args('id') id: string): Rule {
    return this.data.find((rule) => rule.id == id);
  }
}
