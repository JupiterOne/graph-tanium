import { EndpointSensorReadingColumn } from '../tanium/gql-types';
import { normalizeSensorColumns } from './normalizeSensorColumns';

describe('normalizeSensorColumns function', () => {
  it('should return an empty array when given an empty input', () => {
    const columns: EndpointSensorReadingColumn[] = [];
    const result = normalizeSensorColumns(columns);
    expect(result).toEqual([]);
  });

  it('should normalize sensor columns with multiple words', () => {
    const columns: EndpointSensorReadingColumn[] = [
      {
        name: 'Title',
        sensor: { name: 'Available Patches' },
        values: ['title 1', 'title 2', 'title 3'],
      },
      {
        name: 'Release Date',
        sensor: { name: 'Available Patches' },
        values: ['2021-01-01', '2021-01-02', '2021-01-03'],
      },
    ];

    const result = normalizeSensorColumns(columns);
    expect(result).toEqual([
      { title: 'title 1', releaseDate: '2021-01-01' },
      { title: 'title 2', releaseDate: '2021-01-02' },
      { title: 'title 3', releaseDate: '2021-01-03' },
    ]);
  });
});
