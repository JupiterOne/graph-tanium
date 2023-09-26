import { EndpointSensorReadingColumn } from '../tanium/gql-types';

export function normalizeSensorColumns<T extends object>(
  columns: EndpointSensorReadingColumn[],
): T[] {
  const records: T[] = [];
  for (const column of columns) {
    const columnName = normalizeSensorColumnName(column.name);
    for (const [key, value] of column.values.entries()) {
      records[key][columnName] = value;
    }
  }
  return records;
}

function normalizeSensorColumnName(columnName: string): string {
  const parts = columnName.split(' ');
  if (parts.length > 1) {
    return (
      parts[0].toLowerCase() +
      parts
        .slice(1)
        .map(
          (part) =>
            `${part.charAt(0).toUpperCase()}${part.slice(1).toLowerCase()}`,
        )
        .join('')
    );
  } else {
    return `${parts[0].charAt(0).toLowerCase()}${parts[0].slice(1)}`;
  }
}
