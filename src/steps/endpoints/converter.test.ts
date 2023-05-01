import { parseOsDetails } from './converter';
describe('parseOsName', () => {
  const cases = [
    {
      // Regular case
      input: 'Ubuntu 22.01.3',
      result: { osName: 'Ubuntu', osVersion: '22.01.3' },
    },
    {
      // surrounded by parenthesis
      input: 'macOS (13.3)',
      result: { osName: 'macOS', osVersion: '13.3' },
    },
    {
      // empty string
      input: '',
      result: { osName: '', osVersion: undefined },
    },
    {
      // Multi words name
      input: 'Red Hat Linux (11.3)',
      result: { osName: 'Red Hat Linux', osVersion: '11.3' },
    },
    {
      input: 'Solaris 13.3.5 (Lumis)',
      result: { osName: 'Solaris', osVersion: '13.3.5' },
    },
    {
      input: 'Plan 9 13.3',
      result: { osName: 'Plan 9', osVersion: '13.3' },
    },
  ];

  test.each(cases)(`parseOSName`, ({ input, result }) => {
    expect(parseOsDetails(input)).toEqual(result);
  });
});
